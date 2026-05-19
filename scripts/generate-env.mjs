import { config } from 'dotenv';
import { writeFileSync, mkdirSync } from 'fs';

config();

mkdirSync('src/environments', { recursive: true });
writeFileSync(
  'src/environments/environment.ts',
  `export const environment = {\n  bitlyApiToken: ${JSON.stringify(process.env['BITLY_API_TOKEN'] ?? '')},\n};\n`
);
