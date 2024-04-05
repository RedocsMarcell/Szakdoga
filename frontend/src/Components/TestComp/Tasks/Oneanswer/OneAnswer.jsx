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
    <div className="one-answers-container">
        <div className="question">
          <label>
          Question {questionNumber}:
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Enter your question"
          />
          </label>
          <div className="options">
            
                <input
                  type="text"
                  value={answers[0]}
                  onChange={(e) => handleAnswerChange(0, e)}
                  placeholder={`Answer 1`}
                />
                <label>
                  <input
                    type="radio"
                    checked={correctanswers === 1}
                    onChange={() => handleCorrectAnswerChange(0)}
                  />
                  Correct
                </label>
                <br/>
                <input
                  type="text"
                  value={answers[1]}
                  onChange={(e) => handleAnswerChange(1, e)}
                  placeholder={`Answer 2`}
                />
                <label>
                
                  <input
                    type="radio"
                    checked={correctanswers === 2}
                    onChange={() => handleCorrectAnswerChange(1)}
                  />
                  Correct
                </label>
                <br/>
                <input
                  type="text"
                  value={answers[2]}
                  onChange={(e) => handleAnswerChange(2, e)}
                  placeholder={`Answer 3`}
                />
                <label>
                  <input
                    type="radio"
                    checked={correctanswers === 3}
                    onChange={() => handleCorrectAnswerChange(2)}
                  />
                  Correct
                </label>
                <br/>
                <input
                  type="text"
                  value={answers[3]}
                  onChange={(e) => handleAnswerChange(3, e)}
                  placeholder={`Answer 4`}
                />
                <label>
                  <input
                    type="radio"
                    checked={correctanswers === 4}
                    onChange={() => handleCorrectAnswerChange(3)}
                  />
                  Correct
                </label>
              
          </div>
          
          <br/>
          <button onClick={() => handleSave(question,answers,questionNumber,correctanswers)} >Save</button>
          <br/>
          <button onClick={handleRemove} className="remove-question-button-one">X</button>
        </div>
    
    </div>
  );
};

export default OneAnswers;
