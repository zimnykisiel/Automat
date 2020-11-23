import React, { useState } from "react";

export const Automat = () => {
  const [step, stepCount] = useState(0);
  let [text, setText] = useState("");

  const addLetter = (step) => {
    const stepsA = [2, 5, 9];
    const stepsB = [1, 7, 8, 11];

    stepsA.map((element) => element === step && setText((text += "a")));

    stepsB.map((element) => element === step && setText((text += "b")));
  };

  const removeLetter = (step) => {
    const stepList = [2, 3, 6, 8, 9, 10, 12];

    stepList.map((element) => element === step && setText(text.slice(0, -1)));
  };

  return (
    <>
      <h1>Automat skończony deterministyczny</h1>

      <div className="automat">
        <p className={`arrow starting-arrow ${step === 0 && "red"}`}>&rarr;</p>
        <div>
          <p className="letter">b</p>
          <p className={`arrow fix-arrow-position ${step === 2 && "red"}`}>
            &#8630;
          </p>
          <div className={`circle ${step === 1 && "redCircle"}`}>Q2</div>
        </div>
        <div className="box">
          <p className="letter">a</p>
          <p className={`arrow ${step === 3 && "red"}`}>&rarr;</p>
        </div>
        <div>
          <p className="letter">b</p>
          <p className={`arrow fix-arrow-position ${step === 5 && "red"}`}>
            &#8630;
          </p>
          <div className={`circle ${step === 4 && "redCircle"}`}>Q2</div>
        </div>
        <div className="box">
          <p className="letter">a</p>
          <p className={`arrow ${step === 6 && "red"}`}>&rarr;</p>
        </div>
        <div>
          <p className="letter">b</p>
          <p
            className={`arrow fix-arrow-position ${
              step === 8 || (step === 9 && "red")
            }`}
          >
            &#8630;
          </p>
          <div className={`circle ${step === 7 && "redCircle"}`}>Q3</div>
        </div>
        <div className="box">
          <p className="letter">a</p>
          <p className={`arrow ${step === 10 && "red"}`}>&rarr;</p>
        </div>
        <div>
          <p className="letter">a, b</p>
          <p className={`arrow fix-arrow-position ${step === 12 && "red"}`}>
            &#8630;
          </p>
          <div className={`circle ${step === 11 && "redCircle"}`}>
            <div className="circle2">Q4</div>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <button
          onClick={() => {
            stepCount(0);
            setText("");
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            stepCount(step > 0 ? step - 1 : 0);
            step > 0 && removeLetter(step);
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            stepCount(step > 11 ? 12 : step + 1);
            step <= 11 && addLetter(step);
          }}
        >
          Next
        </button>
      </div>

      <p>{text}</p>
    </>
  );
};
