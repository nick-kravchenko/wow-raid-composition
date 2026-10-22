import { expect, test } from 'vitest';
import { recoverLazyLoad } from '../src/app/lazy-load-recovery';

function browserStub() {
  const values = new Map<string, string>();
  const navigations: string[] = [];
  const browser = {
    sessionStorage: {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    },
    location: { assign: (url: string) => navigations.push(url) },
  } as unknown as Pick<Window, 'sessionStorage' | 'location'>;
  return { browser, navigations };
}

for (const message of [
  'Failed to fetch dynamically imported module: https://example.com/chunk.js',
  'error loading dynamically imported module: https://example.com/chunk.js',
  'Importing a module script failed.',
]) {
  test(`recovers once: ${message}`, () => {
    const { browser, navigations } = browserStub();
    const url = '/wow-raid-composition/characters?view=class#mage';
    expect(recoverLazyLoad(new TypeError(message), url, browser)).toBe(true);
    // A fresh invocation with the same tab storage models the reloaded app.
    expect(recoverLazyLoad(new TypeError(message), url, browser)).toBe(false);
    expect(navigations).toEqual([url]);
  });
}

test('does not reload for unrelated errors', () => {
  const { browser, navigations } = browserStub();
  for (const error of [new TypeError('Cannot read properties of undefined'), null, 'error']) {
    expect(recoverLazyLoad(error, '/characters', browser)).toBe(false);
  }
  expect(navigations).toEqual([]);
});

test('does not reload when storage is blocked', () => {
  const { browser, navigations } = browserStub();
  Object.defineProperty(browser, 'sessionStorage', { get() { throw new Error('Access denied'); } });
  expect(recoverLazyLoad(new TypeError('Importing a module script failed.'), '/characters', browser)).toBe(false);
  expect(navigations).toEqual([]);
});
