import { fileURLToPath } from 'url';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const manifest = JSON.parse(readFileSync(path.resolve(__dirname, '../public/manifest.json'), 'utf-8'));

Object.values(manifest.data.windows).forEach((w) => {
  w.debug_url = 'http://localhost:5173';
  w.open_dev_tools = false;
});

try {
  mkdirSync(path.resolve(__dirname, '../dist/'));
} catch (err) {}
writeFileSync(path.resolve(__dirname, '../dist/manifest.json'), JSON.stringify(manifest, null, 2));
