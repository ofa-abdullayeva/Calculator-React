import { useState } from 'react';

function App() {
  const [calc, setcalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '-', '+', '.'];
/*kod analizi */
  const updateCalc = value => {
    if (
      // eslint-disable-next-line no-mixed-operators
      ops.includes(value) && calc === '' ||
      // eslint-disable-next-line no-mixed-operators
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }

    setcalc(calc + value);
    if(!ops.includes(value)){
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }

  }

  const calculate = () =>{
    // eslint-disable-next-line no-eval
    setcalc(eval(calc).toString());
  }

  const deleteLast = () =>{
    if(calc === ''){
      return;
    }

    const value = calc.slice(0, -1);

    setcalc(value);
  }

  

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ''}&nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>


       
        </div>
      </div>

    </div>
  );
}

export default App;
