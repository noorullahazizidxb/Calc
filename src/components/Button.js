import { useContext, useEffect, useRef } from "react"
import { m, useAnimationControls } from "framer-motion"
import { CalcContext } from "../context/CalcContext"
import { ARIA_LABELS, KEY_VARIANTS, glyphFor } from "../logic/keys"
import { SPRING, keyEcho, keyTap, keyVariants } from "../motion/tokens"

const Button = ({ value }) => {
  const { press, keyboardPress } = useContext(CalcContext);
  const controls = useAnimationControls();
  const lastEchoId = useRef(keyboardPress.id);

  useEffect(() => {
    if (keyboardPress.id === lastEchoId.current) return;
    lastEchoId.current = keyboardPress.id;
    if (keyboardPress.key === value) controls.start(keyEcho);
  }, [keyboardPress, value, controls]);

  return (
    <m.div className={`keySlot ${KEY_VARIANTS[value] === 'clear' ? 'keySlot--wide' : ''}`.trim()} variants={keyVariants}>
      <m.button
        type="button"
        onClick={() => press(value)}
        className={`${KEY_VARIANTS[value] ?? ''} button`.trim()}
        aria-label={ARIA_LABELS[value]}
        animate={controls}
        whileTap={keyTap}
        transition={SPRING.press}
      >
        {glyphFor(value)}
      </m.button>
    </m.div>
  )
}

export default Button
