// Keypad layout plus the presentation metadata for each key.

export const KEYPAD = [
  [7, 8, 9, '/'],
  [4, 5, 6, 'x'],
  [1, 2, 3, '+'],
  ['.', 0, '=', '-'],
  ['C'],
];

// Typographic glyphs shown on screen; the underlying key value is unchanged.
export const GLYPHS = {
  '/': '÷',
  'x': '×',
  '-': '−',
};

// Spoken names for keys whose glyph is ambiguous to screen readers.
export const ARIA_LABELS = {
  '/': 'Divide',
  'x': 'Multiply',
  '-': 'Subtract',
  '+': 'Add',
  '=': 'Equals',
  '.': 'Decimal point',
  'C': 'Clear',
};

export const KEY_VARIANTS = {
  '=': 'equals',
  'C': 'clear',
  'x': 'opt',
  '-': 'opt',
  '+': 'opt',
  '/': 'opt',
};

// Physical keyboard → keypad value.
const KEYBOARD_MAP = {
  '+': '+',
  '-': '-',
  '*': 'x',
  'x': 'x',
  'X': 'x',
  '/': '/',
  '.': '.',
  ',': '.',
  '=': '=',
  'Enter': '=',
  'Escape': 'C',
  'Delete': 'C',
  'c': 'C',
  'C': 'C',
};

export const keyFromKeyboard = (key) => {
  if (/^[0-9]$/.test(key)) return Number(key);
  return KEYBOARD_MAP[key];
};

export const glyphFor = (key) => GLYPHS[key] ?? key;
