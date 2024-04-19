import React, { useState } from 'react';
import './MultipleAnswers.css'

const MultipleAnswers = ({questionNumber, onResponse,removeTask}) => {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState(['']);
    const [correctanswers, setCorrectAnswers] = useState([])

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleAnswerChange = (index, e) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = e.target.value;
        setAnswers(updatedAnswers);
    };

    const addAnswerInput = () => {
        setAnswers([...answers, '']);
    };

    const removeAnswerInput = (index) => {
        const updatedAnswers = [...answers];
        updatedAnswers.splice(index, 1);
        setAnswers(updatedAnswers);
    };

    const handleSave = (question,answer,questionNumber,correctanswer) => {
        onResponse(question,answers,questionNumber,correctanswer)
    }
    const handleRemove = () => {
      removeTask(questionNumber);
    };

    const handleCorrectAnswerChange = (index) => {
        if(correctanswers.filter(item => item ===index+1).length >0 )
        {
            correctanswers.splice(index,1)
        }
        else
        {
            setCorrectAnswers([...correctanswers,index+1])
        }
    };

  return (
    <div className="multiple-choice-container">
      <label>
      <div className="Task-serial-number">{questionNumber} . </div>
        <input type="text"
           value={question}
           onChange={handleQuestionChange}
           placeholder={`Ide irja be a kérdést`}
        />
        
      </label>
      <br />
      {answers.map((answer, index) => (
        <div key={index} className="answer-container">
          <label>
            
            <input
              className='Answer'
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e)}
              placeholder={`Válasz`}
            /> 

          </label>
          <input type="checkbox" onChange={() => handleCorrectAnswerChange(index)}/>
          <button className="remove-answer-button" onClick={() => removeAnswerInput(index)}>X</button>
        </div>
      ))}
      <br />
      <button onClick={addAnswerInput}> Válasz hozzáadás </button>
      <br />
      <button className="save-button2" onClick={() => handleSave(question,answers,questionNumber,correctanswers)} >Save</button>
      <br/>
      <button onClick={handleRemove} className="remove-question-button-multiple">X</button>
        
    </div>
  )
}

export default MultipleAnswers;
