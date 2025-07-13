import { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const resumePath = path.join(process.cwd(), 'attached_assets', 'saumitra_kulkarni_14_july_25_1752442277855.pdf');

    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    const file = fs.readFileSync(resumePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Saumitra_Kulkarni_Resume.pdf"');
    res.send(file);
  } catch (error) {
    console.error('Error serving resume:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}