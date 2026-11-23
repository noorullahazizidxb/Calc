import { useEffect } from "react"
import { keyFromKeyboard } from "../logic/keys"

// Enter on a focused control already triggers its own click.
const isNativeActivation = (event) => (
  event.key === 'Enter'
  && event.target instanceof HTMLElement
  && event.target.closest('button, a, input, select, textarea')
);

const useKeyboardInput = (onKey) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
      if (isNativeActivation(event)) return;
      const key = keyFromKeyboard(event.key);
      if (key === undefined) return;
      event.preventDefault();
      onKey(key);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKey]);
};

export default useKeyboardInput
