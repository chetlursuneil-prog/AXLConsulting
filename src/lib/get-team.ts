import fs from 'fs';
import path from 'path';

export function getTeamData() {
  const jsonPath = path.join(process.cwd(), 'data', 'team.json');
  if (fs.existsSync(jsonPath)) {
    try {
      const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      return json;
    } catch (err) {
      return null;
    }
  }
  return null;
}
