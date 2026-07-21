import { useEffect, useRef } from 'react'

/**
 * WebGL canvas shader animation from the `shader` Stitch export
 * (STITCH_SHADER ANIMATION_29). The GLSL sources and render loop are kept
 * verbatim; only the harness is adapted to React (typed, with full cleanup).
 *
 * The export mounted this fixed full-screen; here the wrapper is
 * `absolute inset-0` + `pointer-events-none` so it can sit inside the Hero
 * background layer. Any container opacity/stacking is applied by the parent.
 */
export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Sync the WebGL drawing-buffer size with the CSS-driven layout size.
    // This fires on initial layout and whenever the element is resized.
    function syncSize(): void {
      if (!canvas) return
      const w = canvas.clientWidth || 1280
      const h = canvas.clientHeight || 720
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }
    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize)
      resizeObserver.observe(canvas)
    }
    syncSize()

    const gl = (canvas.getContext('webgl') ??
      canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
    if (!gl) return

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`
    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = v_texCoord;

    // Deep dark background
    vec3 color = vec3(0.02, 0.03, 0.08);

    // Subtle aurora glow
    float glow = sin(uv.x * 2.0 + u_time * 0.2) * 0.5 + 0.5;
    color += vec3(0.0, 0.1, 0.2) * glow * (1.0 - uv.y);

    // Very subtle orange accent glow
    float orangeGlow = sin(uv.x * 3.0 - u_time * 0.1) * 0.5 + 0.5;
    color += vec3(0.1, 0.05, 0.0) * orangeGlow * uv.y * 0.5;

    // Moving particles
    vec2 particleUv = uv * 50.0;
    vec2 id = floor(particleUv);
    vec2 gv = fract(particleUv) - 0.5;
    float n = noise(id);
    float p = smoothstep(0.48, 0.5, n * sin(u_time + n * 10.0));
    float d = length(gv);
    float m = smoothstep(0.02, 0.01, d) * p;
    color += m * 0.4;

    // Subtle grid
    vec2 grid = fract(uv * 40.0);
    float line = smoothstep(0.0, 0.02, grid.x) * smoothstep(1.0, 0.98, grid.x);
    line *= smoothstep(0.0, 0.02, grid.y) * smoothstep(1.0, 0.98, grid.y);
    color += (1.0 - line) * 0.02;

    // Film grain noise
    color += (noise(uv + u_time * 0.01) - 0.5) * 0.03;

    gl_FragColor = vec4(color, 1.0);
}`

    function cs(type: number, src: string): WebGLShader | null {
      if (!gl) return null
      const s = gl.createShader(type)
      if (!s) return null
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()
    const vsShader = cs(gl.VERTEX_SHADER, vs)
    const fsShader = cs(gl.FRAGMENT_SHADER, fs)
    if (!prog || !vsShader || !fsShader) return
    gl.attachShader(prog, vsShader)
    gl.attachShader(prog, fsShader)
    gl.linkProgram(prog)
    gl.useProgram(prog)
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    )
    const pos = gl.getAttribLocation(prog, 'a_position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)
    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_resolution')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')

    // u_mouse is in pixel coordinates matching u_resolution (ShaderToy convention).
    // Shaders that need normalized coords should use: u_mouse / u_resolution.
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    const onMouseMove = (event: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width
        const ny = 1.0 - (event.clientY - rect.top) / rect.height
        mouse.x = nx * canvas.width
        mouse.y = ny * canvas.height
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId = 0
    function render(t: number): void {
      if (!gl || !canvas) return
      if (typeof ResizeObserver === 'undefined') syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, t * 0.001)
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafId = requestAnimationFrame(render)
    }
    render(0)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      if (resizeObserver) resizeObserver.disconnect()
      const loseContext = gl.getExtension('WEBGL_lose_context')
      if (loseContext) loseContext.loseContext()
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  )
}
