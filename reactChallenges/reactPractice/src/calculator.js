import { useState } from "react";



function Calc() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1 + number2);

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
         placeholder="0" value={number1} 
          onChange={(e) => setNumber1(+e.target.value)}
         
        />
        <input
          type="number"
          placeholder="0" value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
         
        />
      </div>

      <button onClick={calculateTotal}>Add us!</button>

      <h2>{total}</h2>
    </div>
  );
}
export default Calc

