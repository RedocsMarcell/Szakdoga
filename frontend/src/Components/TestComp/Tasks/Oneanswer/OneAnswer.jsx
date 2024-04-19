import React, { useState } from 'react';
import './OneAnswer.css';

const OneAnswers = ({questionNumber,onResponse,removeTask}) => {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState(['','','','']);
  const [correctanswers, setCorrectAnswers] = useState(-1)


  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
};

const handleAnswerChange = (index, e) => {
  const updatedAnswers = [...answers];
  updatedAnswers[index] = e.target.value;
  setAnswers(updatedAnswers);
};

  const handleSave = (question,answer,questionNumber,correctanswer) => {
    onResponse(question,answers,questionNumber,correctanswer)
}

  const handleCorrectAnswerChange = (index) => {
    setCorrectAnswers(index+1)
  }

  const handleRemove = () => {
    removeTask(questionNumber);
  };

  return (
    <div className="OneAnswers-Container">
        <div className="Question-OneAnswer">
          <label className='Label-OneAnswer-Question'>
          <div className="OneAnswer-Task-Serial-Number">{questionNumber} . </div>
          <input
            className='Input-Question-OneAnswer'
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder={`Ide irja be a kérdést`}
          />
          </label>
          <div className="Options-OneAnswer">
            
                <input
                  className='Input-OneAnswer-Answers'
                  type="text"
                  value={answers[0]}
                  onChange={(e) => handleAnswerChange(0, e)}
                  placeholder={`Ide irja a választ`}
                />
                <label className='Label-OneAnswer-CorrectAnswers'>
                  <input
                    className='Input-OneAnswer-CorrectAnswers'
                    type="radio"
                    checked={correctanswers === 1}
                    onChange={() => handleCorrectAnswerChange(0)}
                  />
                  
                </label>

                <br/>
                <input
                  className='Input-OneAnswer-Answers'
                  type="text"
                  value={answers[1]}
                  onChange={(e) => handleAnswerChange(1, e)}
                  placeholder={`Ide irja a választ`}
                />
                <label className='Label-OneAnswer-CorrectAnswers'>
                
                  <input 
                    className='Input-OneAnswer-CorrectAnswers'
                    type="radio"
                    checked={correctanswers === 2}
                    onChange={() => handleCorrectAnswerChange(1)}
                  />
                  
                </label>
                <br/>

                <input
                  className='Input-OneAnswer-Answers'
                  type="text"
                  value={answers[2]}
                  onChange={(e) => handleAnswerChange(2, e)}
                  placeholder={`Ide irja a választ`}
                />
                <label className='Label-OneAnswer-CorrectAnswers'>
                  <input
                  className='Input-OneAnswer-CorrectAnswers'
                    type="radio"
                    checked={correctanswers === 3}
                    onChange={() => handleCorrectAnswerChange(2)}
                  />
                 
                </label>
                <br/>
                <input
                  className='Input-OneAnswer-Answers'
                  type="text"
                  value={answers[3]}
                  onChange={(e) => handleAnswerChange(3, e)}
                  placeholder={`Ide irja a választ`}
                />
                <label className='Label-OneAnswer-CorrectAnswers'>
                  <input
                    className='Input-OneAnswer-CorrectAnswers'
                    type="radio"
                    checked={correctanswers === 4}
                    onChange={() => handleCorrectAnswerChange(3)}
                  />
                 
                </label>
              
          </div>
          
          <br/>
          <button className='Save-Button' onClick={() => handleSave(question,answers,questionNumber,correctanswers)} >Save</button>
          <br/>
          <button onClick={handleRemove} className="Remove-Button-OneAnswer">X</button>
        </div>
    
    </div>
  );
};

export default OneAnswers;
