import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const template = readFileSync('src/app/shared/raid-tile/raid-tile.component.html', 'utf8');
const styles = readFileSync('src/app/shared/raid-tile/raid-tile.component.scss', 'utf8');

assert.match(
  template,
  /<form class="title-edit-form" \(submit\)="submitTitleEdit\(\$event\)">/,
  'raid title editing should submit through a form so Enter saves the edit',
);

assert.match(
  template,
  /<button class="title-edit-btn" type="button" \(click\)="startTitleEdit\(\)"/,
  'title edit button should only enter edit mode while the form handles saving',
);

assert.match(
  styles,
  /width:\s*8\.4rem;/,
  'raid title display and input should be 20% wider than the previous 7rem width',
);
