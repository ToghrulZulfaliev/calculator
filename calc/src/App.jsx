import { useState } from "react";
import "./App.css";
import Button from "./components/Button/index.jsx";
import ButtonBox from "./components/ButtonBox/index.jsx";
import Wrapper from "./components/Wrapper/index.jsx";
import Screen from "./components/Screen/index.jsx";
import { Btnvalues } from "./uilts/Data.js"
function App() {
  const [calc, setCalc] = useState("0");

  return (
    <>
      <Wrapper>
        <Screen value={0} />
        <ButtonBox>
          {Btnvalues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked`);
                }}
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
    </>
  );
}

export default App;
