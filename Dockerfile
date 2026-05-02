# Build static site; serve with nginx (correct per-route HTML — avoids SPA-style fallback).
FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/nginx/default.conf.template /etc/nginx/templates/default.conf.template
ENV PORT=8080
EXPOSE 8080
