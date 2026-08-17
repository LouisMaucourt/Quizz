import { serve } from "bun";
import index from "./index.html";

const API_URL = process.env.API_URL ?? "http://localhost:4000";

const server = serve({
    port: process.env.PORT ? Number(process.env.PORT) : 3000,

    routes: {
        "/api/*": async (req) => {
            const url = new URL(req.url);
            const target = `${API_URL}${url.pathname}${url.search}`;

            const hasBody = req.method !== "GET" && req.method !== "HEAD";

            return fetch(target, {
                method: req.method,
                headers: req.headers,
                body: hasBody ? await req.arrayBuffer() : undefined,
            });
        },

        "/img/*": async (req) => {
            const url = new URL(req.url);
            const filename = url.pathname.replace("/img/", "");
            const filePath = `./public/${filename}`;
            const file = Bun.file(filePath);

            if (await file.exists()) {
                return new Response(file);
            }
            return new Response("Not found", { status: 404 });
        },
        "/*": index,
    },

    development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
console.log(`🔀 Proxying /api/* -> ${API_URL}`);