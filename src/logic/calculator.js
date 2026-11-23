// Pure calculator state transitions. Each handler receives the current state
// and the pressed key, and returns the next state.

export const INITIAL_STATE = { sign: '', num: 0, res: 0 };

const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  'x': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const decimal = (calc, key) => ({
  ...calc,
  num: !calc.num.toString().includes('.') ? calc.num + key : calc.num,
});

const reset = () => INITIAL_STATE;

const digit = (calc, key) => {
  const numberString = key.toString();
  const num = numberString === '0' && calc.num === 0
    ? '0'
    : Number(calc.num + numberString);
  return { ...calc, num };
};

const operator = (calc, key) => ({
  sign: key,
  res: !calc.res && calc.num ? calc.num : calc.res,
  num: 0,
});

const equals = (calc) => (
  calc.res && calc.num
    ? { res: OPERATIONS[calc.sign](calc.res, calc.num), sign: '', num: 0 }
    : calc
);

const percent = (calc) => ({
  num: calc.num / 100,
  res: calc.res / 100,
  sign: '',
});

const invert = (calc) => ({
  num: calc.num ? calc.num * -1 : 0,
  res: calc.res ? calc.res * -1 : 0,
  sign: '',
});

const HANDLERS = {
  '.': decimal,
  'C': reset,
  '/': operator,
  'x': operator,
  '-': operator,
  '+': operator,
  '=': equals,
  '%': percent,
  '+-': invert,
};

export const applyKey = (calc, key) => (HANDLERS[key] ?? digit)(calc, key);

export const displayValue = (calc) => (calc.num ? calc.num : calc.res);

export const isOperator = (key) => key in OPERATIONS;
