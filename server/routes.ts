import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the resume PDF file
  app.get('/api/resume', (req, res) => {
    const resumePath = path.join(process.cwd(), 'attached_assets', 'saumitra_kulkarni_14_july_25_1752442277855.pdf');
    res.download(resumePath, 'Saumitra_Kulkarni_Resume.pdf', (err) => {
      if (err) {
        console.error('Error downloading resume:', err);
        res.status(404).json({ message: 'Resume not found' });
      }
    });
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
