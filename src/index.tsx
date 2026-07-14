import { serve } from "bun";
import index from "./index.html";

const server = serve({
    routes: {
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