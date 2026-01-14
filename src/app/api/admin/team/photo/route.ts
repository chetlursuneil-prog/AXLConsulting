import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import sharp from 'sharp';

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_DIMENSION = 1200; // max width/height

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, filename, data } = body;
    if (!id || !filename || !data) {
      return NextResponse.json({ error: 'Missing id, filename or data' }, { status: 400 });
    }

    // Parse data URL
    const match = String(data).match(/^data:(.+);base64,(.+)$/);
    if (!match) {
      return NextResponse.json({ error: 'Invalid data URL' }, { status: 400 });
    }
    const mime = match[1];
    const base64 = match[2];

    if (!ALLOWED_TYPES.includes(mime)) {
      return NextResponse.json({ error: 'Unsupported image type' }, { status: 400 });
    }

    const buffer = Buffer.from(base64, 'base64');
    if (buffer.length > MAX_SIZE_BYTES) {
      return NextResponse.json({ error: 'File too large' }, { status: 413 });
    }

    // Use sharp to validate and resize
    const image = sharp(buffer, { failOnError: true });
    const metadata = await image.metadata();
    if (!metadata || !metadata.format) {
      return NextResponse.json({ error: 'Invalid image' }, { status: 400 });
    }

    const ext = 'jpg';
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/\.(jpg|jpeg|png|webp)$/i, '') + '.' + ext;

    const uploadsDir = path.join(process.cwd(), 'public', 'images', 'team');
    fs.mkdirSync(uploadsDir, { recursive: true });

    const resized = await image
      .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 86 })
      .toBuffer();

    const filePath = path.join(uploadsDir, safeName);
    fs.writeFileSync(filePath, resized);

    // Update src/data/team.ts to set the image path for the member with matching id
    const dataFile = path.join(process.cwd(), 'src', 'data', 'team.ts');
    if (fs.existsSync(dataFile)) {
      let content = fs.readFileSync(dataFile, 'utf8');
      const imagePath = `/images/team/${safeName}`;

      const replaceRegex = new RegExp("(\\{[\\s\\S]*?id:\\s*'" + id + "'[\\s\\S]*?)image:\\s*'[^']*'", 'm');
      if (replaceRegex.test(content)) {
        content = content.replace(replaceRegex, `$1image: '${imagePath}'`);
        fs.writeFileSync(dataFile, content, 'utf8');
      } else {
        const objRegex = new RegExp("(\\{[\\s\\S]*?id:\\s*'" + id + "'[\\s\\S]*?\\})", 'm');
        const objMatch = content.match(objRegex);
        if (objMatch) {
          const obj = objMatch[0];
          const newObj = obj.replace(/\n\s*\}/, `\n    image: '${imagePath}',\n  }`);
          content = content.replace(obj, newObj);
          fs.writeFileSync(dataFile, content, 'utf8');
        }
      }

      // Also update runtime JSON used by client pages
      try {
        const jsonPath = path.join(process.cwd(), 'data', 'team.json');
        if (fs.existsSync(jsonPath)) {
          const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
          if (json && Array.isArray(json.founders)) {
            const m = json.founders.find((f: any) => f.id === id);
            if (m) {
              m.image = imagePath;
              fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), 'utf8');
            }
          }
        }
      } catch (err) {
        // non-fatal
      }
    }

    return NextResponse.json({ url: `/images/team/${safeName}` });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
