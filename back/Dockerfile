FROM oven/bun:1 AS base
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

ENV NODE_ENV=production
EXPOSE 4000

CMD ["sh", "-c", "bun run migrate && bun run start"]