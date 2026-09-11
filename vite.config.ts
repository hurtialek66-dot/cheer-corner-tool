import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Emit a static SPA shell + prerendered HTML for every route so the build
    // can be served by any plain static host (nginx, Instapods, etc).
    spa: { enabled: true },
    prerender: { enabled: true, crawlLinks: true },
  },
});
