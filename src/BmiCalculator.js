import React, { useState } from "react";
import './Bmi.css';

function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calcBmi = () => {
    if (!height || !weight) {
      alert("Please enter both weight and height.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundBmi = bmiValue.toFixed(2);
    setBmi(roundBmi);
    bmiCategory(bmiValue);
  };

  const bmiCategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setCategory('Normal Weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>BMI CALCULATOR</h1>
        
        <input
          type="number"
          className="input1"
          name="weight"
          value={weight}
          step="any"
          placeholder="Enter your weight in kg"
        
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />

        <input
          type="number"
          className="input1"
          name="height"
          value={height}
          step="any"
          placeholder="Enter your height in cm"
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />

        <button
          type="button"
          className="button"
          onClick={calcBmi}
          disabled={!weight || !height}
        >
          Calculate
        </button>

        {bmi && (
          <>
            <h3>BMI: {bmi}</h3>
            <p>Category: {category}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default BmiCalculator;
