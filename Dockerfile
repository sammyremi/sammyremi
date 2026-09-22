# syntax=docker/dockerfile:1

FROM node:22-alpine AS base

WORKDIR /app


# Install dependencies
FROM base AS deps

COPY sammyremi-technologies/package.json sammyremi-technologies/package-lock.json ./

RUN npm ci


# Build the Next.js application
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules

COPY sammyremi-technologies/ ./

RUN npm run build


# Production image
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
