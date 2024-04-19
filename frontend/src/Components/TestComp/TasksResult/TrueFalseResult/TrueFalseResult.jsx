import React, { useState,useEffect } from 'react';
import './TrueFalseResult.css';

const TrueFalseResult = ({questionNumber,question,answer,correctanswer,taskid}) => {
  
  

  
  

  
  

  return (
    
      <div className="true-false-container">
        <label className="question">
          <div><div className= "Task-serial-number">  {questionNumber} . </div>
          {question}</div>
        </label>
        <div className="answer-buttons">
          <div  className={`${answer ? 'selected' : ''}`}>Igaz</div>
          <div  className={`${answer === false ? 'selected' : ''}`}>Hamis</div>
        </div>

        <br/>
        
     
    </div>
  );
}

export default TrueFalseResult;
