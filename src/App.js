// App.js
import React, { useState } from "react";
import { add } from "./StringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <textarea value={input} onChange={handleChange} rows="5" cols="30" />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        {result !== null && <h2>Result: {result}</h2>}
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
      </div>
    </div>
  );
};

export default App;
