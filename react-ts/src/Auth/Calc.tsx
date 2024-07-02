import { useState } from "react";
import "./Calc.css";

function Calc() {
  const btns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const [firstNum, setFristNum] = useState<string>("");
  const [secNum, setSecNum] = useState<string>("");
  const [fullyInput, setFullyInput] = useState<string>("");
  const [calculateItem, setCalculateItem] = useState<number | string>();
  const [opperators, setOpperators] = useState<boolean>(true);
  const [operSymb, setOperSymb] = useState<string>("");
  function clickOperator(event: React.MouseEvent) {
    event.preventDefault();

    if (calculateItem != undefined && calculateItem != 0) {
      setFristNum(String(calculateItem));
      setOperSymb(event.currentTarget.innerHTML);
      setFullyInput(fullyInput.concat(event.currentTarget.innerHTML));
      setOpperators(false);
    } else if (opperators == true) {
      setOperSymb(event.currentTarget.innerHTML);
      setFullyInput(fullyInput.concat(event.currentTarget.innerHTML));
      setOpperators(false);
    }
  }
  function allClear(event: React.MouseEvent) {
    event.preventDefault();
    setFristNum("");
    setSecNum("");
    setFullyInput("");
    setCalculateItem(undefined);
    setOpperators(true);
    setOperSymb("");
  }
  function clickNum(event: React.MouseEvent) {
    event.preventDefault();

    if (opperators == true) {
      setFristNum(String(firstNum).concat(event.currentTarget.innerHTML));
      setFullyInput(fullyInput.concat(event.currentTarget.innerHTML));
    } else {
      setSecNum(String(secNum).concat(event.currentTarget.innerHTML));
      setFullyInput(fullyInput.concat(event.currentTarget.innerHTML));
    }
  }
  function calculate(event: React.MouseEvent) {
    event.preventDefault();
    if (firstNum != undefined && secNum != undefined) {
      switch (operSymb) {
        case "/":
          setCalculateItem(Number(firstNum) / Number(secNum));
          break;
        case "*":
          setCalculateItem(Number(firstNum) * Number(secNum));
          break;
        case "+":
          setCalculateItem(Number(firstNum) + Number(secNum));
          break;
        case "-":
          setCalculateItem(Number(firstNum) - Number(secNum));
          break;
        case "%":
          setCalculateItem(Number(firstNum) % Number(secNum));
          break;
        case "^":
          setCalculateItem(Number(firstNum) ** Number(secNum));
          break;
      }
    }
    setOpperators(true);
    setFullyInput("");
    setFristNum("");
    setSecNum("");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-800">
      <div className="calculator w-[500px] h-[700px] bg-gray-900 rounded-2xl">
        <div className="inpCalc h-1/5">
          <div className="savedInput text-white text-4xl text-right mr-10 h-[40px]">
            {fullyInput}
          </div>
          <div className="baseInput  text-white text-4xl text-right mr-10 h-[40px]">
            {calculateItem}
          </div>
        </div>
        <div className="buttonSect flex  content-center justify-center">
          <div className="nums grid grid-cols-3 gap-4">
            <div className="btn bg-gray-500" key="AC" onClick={allClear}>
              AC
            </div>
            <div className="btn bg-gray-500" key="^" onClick={clickOperator}>
              ^
            </div>
            <div className="btn bg-gray-500" key="%" onClick={clickOperator}>
              %
            </div>
            {btns.map((btnKey) => (
              <div className="btn bg-gray-600" key={btnKey} onClick={clickNum}>
                {btnKey}
              </div>
            ))}
            <div className="btn bg-gray-600" key="&lt;" onClick={clickOperator}>
              &lt;
            </div>
          </div>
          <div className="operands ml-4 grid grid-cols-1 gap-4">
            <div className="btn bg-orange-400" key="/" onClick={clickOperator}>
              /
            </div>
            <div className="btn bg-orange-400" key="*" onClick={clickOperator}>
              *
            </div>
            <div className="btn bg-orange-400" key="-" onClick={clickOperator}>
              -
            </div>
            <div className="btn bg-orange-400" key="+" onClick={clickOperator}>
              +
            </div>
            <div className="btn bg-orange-400" key="=" onClick={calculate}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
