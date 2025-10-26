import express from "express";
import path from "path";
import fs from "fs";

const app = express();

// Middleware
app.use(express.json());

// Example API route
app.get("/api/ping", (_req, res) => {
  res.json({ message: "pong" });
});

// Serve static files (for safety if someone hits a root)
const distPath = path.join(process.cwd(), "dist", "public");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get("*", (_, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Export the app — this makes Express work on Vercel
export default app;
