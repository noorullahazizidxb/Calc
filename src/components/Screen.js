import { useContext } from "react"
import { AnimatePresence, m } from "framer-motion"
import { Textfit } from 'react-textfit';
import { CalcContext } from "../context/CalcContext"
import { displayValue } from "../logic/calculator"
import { glyphFor } from "../logic/keys"
import { displayValueMotion, expressionMotion } from "../motion/tokens"

const Screen = () => {
  const { calc } = useContext(CalcContext);
  const value = displayValue(calc);
  const expression = calc.sign ? `${calc.res} ${glyphFor(calc.sign)}` : '';

  return (
    <div className="display">
      <p className="expression" aria-hidden="true">
        <AnimatePresence initial={false} mode="popLayout">
          {expression && (
            <m.span key={expression} className="expressionText" {...expressionMotion}>
              {expression}
            </m.span>
          )}
        </AnimatePresence>
      </p>
      <div role="status" aria-live="polite" aria-label="Result">
        <Textfit className="screen" max={64} mode="single">
          <AnimatePresence initial={false}>
            <m.span key={String(value)} className="screenValue" {...displayValueMotion}>
              {value}
            </m.span>
          </AnimatePresence>
        </Textfit>
      </div>
    </div>
  )
}

export default Screen
