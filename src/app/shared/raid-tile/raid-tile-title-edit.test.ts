import { expect, test } from 'vitest';
import { readFileSync } from 'node:fs';

test('raid-tile-title-edit', () => {
  const template = readFileSync('src/app/shared/raid-tile/raid-tile.component.html', 'utf8');
  const styles = readFileSync('src/app/shared/raid-tile/raid-tile.component.scss', 'utf8');

  expect(template, 'raid title editing should submit through a form so Enter saves the edit').toMatch(/<form class="title-edit-form" \(submit\)="submitTitleEdit\(\$event\)">/);

  expect(template, 'title edit button should only enter edit mode while the form handles saving').toMatch(/<button class="title-edit-btn" type="button" \(click\)="startTitleEdit\(\)"/);

  expect(styles, 'raid title display and input should be 20% wider than the previous 7rem width').toMatch(/width:\s*8\.4rem;/);
});
