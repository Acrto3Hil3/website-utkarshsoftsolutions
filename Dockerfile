# ---------- Build stage ----------
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
# VITE_* build args let you bake frontend config into the image
ARG VITE_LINKEDIN
ARG VITE_GITHUB
ARG VITE_PORTFOLIO
ARG VITE_WHATSAPP
ARG VITE_GA_MEASUREMENT_ID
ARG VITE_CLARITY_PROJECT_ID
RUN npm run build

# ---------- Runtime stage ----------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist
COPY --from=build /app/dist-server ./dist-server

EXPOSE 3000
USER node
CMD ["node", "dist-server/index.js"]
