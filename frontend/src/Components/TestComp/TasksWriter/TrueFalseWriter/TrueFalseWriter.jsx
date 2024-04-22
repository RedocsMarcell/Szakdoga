import React, { useState,useEffect } from 'react';
import './TrueFalseWriter.css';

const TrueFalse = ({questionNumber,question, onResponse,answers,taskid}) => {
  
  const [answer, setAnswer] = useState(null);

  
  const handleTrue = () => {
    if(question !=='') {
      setAnswer(true);
    }
  };

  const handleFalse = () => {
    if(question !=='') {
      setAnswer(false);
    }
  };

  useEffect(() => {
    if(answer === true)
    {
        onResponse(answers[0].id,taskid)
    }
    if(answer===false)
    {
        onResponse(answers[1].id,taskid)
    }
    
  },[answer])
  

  return (
    
      <div className="TrueFalseWriter-Container">
        <div className= 'TrueFlase-Writer-Task-serial-number'>  {questionNumber} . </div>
        <label className="Label-TrueFalseWriter-Question">
          <div>
          {question}</div>
        </label>
        <div className="TrueFalseWriter-Answer-Buttons">
          <button onClick={handleTrue} className={`${answer ? 'selected' : ''}`}>Igaz</button>
          <button onClick={handleFalse} className={`${answer === false ? 'selected' : ''}`}>Hamis</button>
        </div>

        <br/>
        
     
    </div>
  );
}

export default TrueFalse;
