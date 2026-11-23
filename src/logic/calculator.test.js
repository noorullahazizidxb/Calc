import { INITIAL_STATE, applyKey, displayValue } from './calculator';
import { keyFromKeyboard } from './keys';

const run = (keys) => keys.reduce(applyKey, INITIAL_STATE);

test('chains digits and evaluates each operator', () => {
  expect(displayValue(run([1, 2, '+', 3, '=']))).toBe(15);
  expect(displayValue(run([9, '-', 4, '=']))).toBe(5);
  expect(displayValue(run([6, 'x', 7, '=']))).toBe(42);
  expect(displayValue(run([8, '/', 2, '=']))).toBe(4);
});

test('allows only one decimal point per number', () => {
  expect(displayValue(run([1, '.', '.', 5]))).toBe(1.5);
});

test('equals without a pending operand keeps the state', () => {
  const state = run([7, '+']);
  expect(applyKey(state, '=')).toBe(state);
});

test('maps physical keys to keypad values', () => {
  expect(keyFromKeyboard('7')).toBe(7);
  expect(keyFromKeyboard('*')).toBe('x');
  expect(keyFromKeyboard(',')).toBe('.');
  expect(keyFromKeyboard('Enter')).toBe('=');
  expect(keyFromKeyboard('Escape')).toBe('C');
  expect(keyFromKeyboard('a')).toBeUndefined();
});
