import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, filename, data } = body;
    if (!id || !filename || !data) {
      return NextResponse.json({ error: 'Missing id, filename or data' }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'images', 'team');
    fs.mkdirSync(uploadsDir, { recursive: true });

    const base64 = data.split(',').pop() as string;
    const buffer = Buffer.from(base64, 'base64');
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const filePath = path.join(uploadsDir, safeName);
    fs.writeFileSync(filePath, buffer);

    // Update src/data/team.ts to set the image path for the member with matching id
    const dataFile = path.join(process.cwd(), 'src', 'data', 'team.ts');
    if (fs.existsSync(dataFile)) {
      let content = fs.readFileSync(dataFile, 'utf8');
      const imagePath = `/images/team/${safeName}`;

      // Replace the image property for the object with matching id
      const idPattern = `id: '${id}'`;
      const idx = content.indexOf(idPattern);
      if (idx !== -1) {
        // Find the image: '...' entry after this index
        const slice = content.slice(idx, idx + 800); // look ahead
        const imageRegex = /image:\s*'[^']*'/m;
        if (imageRegex.test(slice)) {
          const replacedSlice = slice.replace(imageRegex, `image: '${imagePath}'`);
          content = content.slice(0, idx) + replacedSlice + content.slice(idx + slice.length);
          fs.writeFileSync(dataFile, content, 'utf8');
        }
      }
    }

    return NextResponse.json({ url: `/images/team/${safeName}` });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
