import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_BUILD=1 produces a fully static site (prerendered HTML + assets)
// that any plain static host (nginx / Instapods) can serve.
const isStatic = process.env["STATIC_BUILD"] === "1";

export default defineConfig({
  nitro: isStatic ? false : undefined,
  tanstackStart: isStatic
    ? { spa: { enabled: true }, prerender: { enabled: true, crawlLinks: true } }
    : { server: { entry: "server" } },
});
