import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, imageUrl } = body;
    if (!id || !imageUrl) {
      return NextResponse.json({ error: 'Missing id or imageUrl' }, { status: 400 });
    }

    const dataFile = path.join(process.cwd(), 'src', 'data', 'team.ts');
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ error: 'team.ts not found' }, { status: 500 });
    }

    let content = fs.readFileSync(dataFile, 'utf8');
    const idPattern = `id: '${id}'`;
    const idx = content.indexOf(idPattern);
    if (idx === -1) {
      return NextResponse.json({ error: 'Member id not found' }, { status: 404 });
    }

    const slice = content.slice(idx, idx + 1200);
    const imageRegex = /image:\s*'[^']*'/m;
    if (imageRegex.test(slice)) {
      const replacedSlice = slice.replace(imageRegex, `image: '${imageUrl}'`);
      content = content.slice(0, idx) + replacedSlice + content.slice(idx + slice.length);
      fs.writeFileSync(dataFile, content, 'utf8');
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'image field not found' }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
