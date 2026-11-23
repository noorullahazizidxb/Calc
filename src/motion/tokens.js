// Single source of truth for motion: durations, easings, springs and variants.

export const DURATION = {
  fast: 0.12,
  base: 0.2,
  slow: 0.32,
};

export const EASE = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
};

export const SPRING = {
  press: { type: 'spring', stiffness: 700, damping: 30, mass: 0.6 },
  indicator: { type: 'spring', stiffness: 500, damping: 38 },
};

export const keypadVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.018, delayChildren: 0.04 },
  },
};

export const keyVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

export const keyTap = { scale: 0.94 };

// Brief dip used when a key is entered from the physical keyboard.
export const keyEcho = {
  scale: [1, 0.94, 1],
  transition: { duration: DURATION.base, ease: EASE.out },
};

export const displayValueMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.base, ease: EASE.out },
};

export const expressionMotion = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6, transition: { duration: DURATION.fast, ease: EASE.inOut } },
  transition: { duration: DURATION.base, ease: EASE.out },
};

export const iconSwap = {
  initial: { opacity: 0, rotate: -30, scale: 0.7 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  transition: { duration: DURATION.base, ease: EASE.out },
};
