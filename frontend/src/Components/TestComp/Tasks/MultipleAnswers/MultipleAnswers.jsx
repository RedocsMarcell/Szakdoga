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
    <div className="Multiple-Container">
      <label className='Label-Multiple-Question'>
      <div className="Multiple-Task-Serial-Number">{questionNumber} . </div>
        <input type="text"
          className='Input-Multiple-Question'
           value={question}
           onChange={handleQuestionChange}
           placeholder={`Ide irja be a kérdést`}
        />
        
      </label>
      <br />
      
      {answers.map((answer, index) => (
        <div key={index} className="Multiple-Answer-Container">

          <label className='Label-MultipleAnswer'>
            
            <input
              className='Input-Multiple-Answer'
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e)}
              placeholder={`Válasz`}
            /> 

          
          <input className='Input-Multiple-CorrectAnswer' type="checkbox" onChange={() => handleCorrectAnswerChange(index)}/>
          <button className="Remove-Answer-Button" onClick={() => removeAnswerInput(index)}> X </button>
          </label>
          <br />
          
        </div>

))}
      
      <br />
      <div className='Button-Add-Answer-Container'>
      <button className='Button-Add-Answer' onClick={addAnswerInput}> Válasz hozzáadás </button>
      </div>
      <button className="Button-Save" onClick={() => handleSave(question,answers,questionNumber,correctanswers)} >Save</button>
      <br/>
      <button onClick={handleRemove} className="Remove-Question-Button-Multiple"> X </button>
        
    </div>
  )
}

export default MultipleAnswers;
