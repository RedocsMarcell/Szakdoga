import React, { useState } from 'react';
import './TrueFalse.css';

const TrueFalse = ({questionNumber, questionValue, onResponse, removeTask}) => {
  const [question, setQuestion] = useState(' ');
  const [answer, setAnswer] = useState(null);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleTrue = () => {
    if(question !== '') {
      setAnswer(true);
    }
  };

  const handleFalse = () => {
    if(question !== '') {
      setAnswer(false);
    }
  };

  const handleSave = () => {
    onResponse(question, answer, questionNumber, answer);
  };

  const handleRemove = () => {
    removeTask(questionNumber);
  };

  return (
    <div className="TrueFalse-container">
      <div className="TrueFalse-Task-serial-number">{questionNumber} . </div>
      <label className="Label-TrueFalse-Question">
        <input className='Input-TrueFalse-Question' type="text" placeholder={`Ide írja a választ`}
          value={question === " " ? questionValue : question} 
          onChange={handleQuestionChange} 
        />
      </label>
      <div className="Answer-TrueFalse-Buttons">
        <button onClick={handleTrue} className={`${answer ? 'selected' : ''}`}>True</button>
        <button onClick={handleFalse} className={`${answer === false ? 'selected' : ''}`}>False</button>
      </div>
      <button className="Remove-TrueFalse-Button" onClick={handleRemove}>X</button>
      <button className='Save-Button' onClick={handleSave}>Save</button>
    </div>
  );
}

export default TrueFalse;
