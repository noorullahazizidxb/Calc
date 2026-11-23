import { createContext, useCallback, useMemo, useState } from "react"
import { INITIAL_STATE, applyKey } from "../logic/calculator"
import useKeyboardInput from "../hooks/useKeyboardInput"

export const CalcContext = createContext()

const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState(INITIAL_STATE);
  // Last key entered from the physical keyboard, so its on-screen key can echo the press.
  const [keyboardPress, setKeyboardPress] = useState({ key: null, id: 0 });

  const press = useCallback((key) => {
    setCalc((current) => applyKey(current, key));
  }, []);

  const pressFromKeyboard = useCallback((key) => {
    press(key);
    setKeyboardPress(({ id }) => ({ key, id: id + 1 }));
  }, [press]);

  useKeyboardInput(pressFromKeyboard);

  const providerValue = useMemo(
    () => ({ calc, press, keyboardPress }),
    [calc, press, keyboardPress]
  );

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider
