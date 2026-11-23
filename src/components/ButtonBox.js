import { m } from "framer-motion"
import { keypadVariants } from "../motion/tokens"

const ButtonBox = ({ children }) => {
  return (
    <m.div
      className="buttonBox"
      variants={keypadVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </m.div>
  )
}

export default ButtonBox
