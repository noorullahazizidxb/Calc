import { LazyMotion, MotionConfig, domMax } from "framer-motion"
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider from "./context/CalcContext";
import { KEYPAD } from "./logic/keys";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domMax} strict>
        <CalcProvider>
          <Wrapper>
            <Screen />
            <ButtonBox>
              {KEYPAD.flat().map((btn) => (
                <Button value={btn} key={btn} />
              ))}
            </ButtonBox>
          </Wrapper>
          <p className="hint">Keyboard works too: Enter for the result, Esc to clear.</p>
        </CalcProvider>
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;
