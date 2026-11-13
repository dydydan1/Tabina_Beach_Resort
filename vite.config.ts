import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * The preview hostname for this workspace is supplied through
 * __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS (comma separated). Reading it here
 * keeps the tracked config free of a hard-coded, per-VM hostname while still
 * allowing the cloud preview server to reach the dev server.
 */
const allowedHosts = (process.env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS ?? "")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts,
  },
});
