import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div role="status" aria-live="polite" aria-label="Result">
      <Textfit className="screen" max={64} mode="single">{calc.num ? calc.num : calc.res}</Textfit>
    </div>
  )
}

export default Screen