import './App.css';
import React, { useState } from 'react';
import Steps from './components/Steps';

function App() {
  const [step, setStep] = useState(0);
  const steps=6;

  const nextStep = () => {
    setStep((prev) => (prev < steps ? prev + 1 : prev));

  };

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="App">
      <Steps steps={steps} step={step} />
      <div className='stepButtons'>
        <button className='prevButton' onClick={prevStep} disabled={step === 1}>Prev</button>
        <button className='nextButton' onClick={nextStep} disabled={step === steps}>Next</button>
      </div>
      <div className='QAHeader'>
        <h2>QA: {step}</h2>
      </div>
    </div>
  );
}

export default App;
