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

    // Try to replace image property within the object that contains the id
    const replaceRegex = new RegExp("(\\{[\\s\\S]*?id:\\s*'" + id + "'[\\s\\S]*?)image:\\s*'[^']*'", 'm');
    if (replaceRegex.test(content)) {
      content = content.replace(replaceRegex, `$1image: '${imageUrl}'`);
      fs.writeFileSync(dataFile, content, 'utf8');
      return NextResponse.json({ ok: true });
    }

    // If there's no existing image property, insert one before the end of the object
    const objRegex = new RegExp("(\\{[\\s\\S]*?id:\\s*'" + id + "'[\\s\\S]*?\\})", 'm');
    const objMatch = content.match(objRegex);
    if (objMatch) {
      const obj = objMatch[0];
      const newObj = obj.replace(/\n\s*\}/, `\n    image: '${imageUrl}',\n  }`);
      content = content.replace(obj, newObj);
      fs.writeFileSync(dataFile, content, 'utf8');
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'member object not found' }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
