# Build static site, then serve with `serve` (reads PORT from Railway).
FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist
EXPOSE 3000
# No `-s` (--single): that mode sends every URL to index.html and breaks Astro multi-page routes.
CMD ["sh", "-c", "serve dist -l \"tcp://0.0.0.0:${PORT:-3000}\""]
