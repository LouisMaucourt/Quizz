FROM oven/bun:1

WORKDIR /

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "index.tsx"]