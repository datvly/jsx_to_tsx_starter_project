import { useState, ChangeEvent } from 'react';

function SumComponent() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const calculateSum = () => {
    // Fixed type error: num1 and num2 are now properly typed as numbers
    setSum(num1 + num2);
  };

  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum2(Number(e.target.value));
  };

  return (
    <div>
      <br />
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumComponent; 