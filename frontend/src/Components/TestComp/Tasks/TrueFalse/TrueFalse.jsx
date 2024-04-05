import React, { useState } from 'react';
import './TrueFalse.css';

const TrueFalse = ({questionNumber,questionvalue, onResponse, removeTask}) => {
  const [question, setQuestion] = useState(' ');
  const [answer, setAnswer] = useState(null);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

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

  const handleSave = (question, answer, questionNumber, correctanswer) => {
    onResponse(question, answer, questionNumber, correctanswer);
  };

  const handleRemove = () => {
    removeTask(questionNumber);
  };

  return (
    
      <div className="true-false-container">
        <label className="question">
          Question {questionNumber}:
          <input type="text" value={`${question === " " ? questionvalue : question}`} onChange={handleQuestionChange} />
        </label>
        <div className="answer-buttons">
          <button onClick={handleTrue} className={`${answer ? 'selected' : ''}`}>True</button>
          <button onClick={handleFalse} className={`${answer === false ? 'selected' : ''}`}>False</button>
        </div>
        <button onClick={handleRemove} className="remove-question-button-true">X</button>
        <br/>
        <button className='save-button' onClick={() => handleSave(question, answer, questionNumber, answer)}>Save</button>
     
    </div>
  );
}

export default TrueFalse;
