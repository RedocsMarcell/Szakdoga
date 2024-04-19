import React, { useState, useEffect } from 'react'
import './OneanswerWriter.css'

function OneanswerWriter({ questionNumber, question, answers, onResponse, taskid }) {
  const [answer, setAnswer] = useState(0)

  const handleCorrectAnswerChange = (number) => {
    setAnswer(number)
  }

  useEffect(() => {
    if (answer !== 0) {
      onResponse(answers[answer - 1].id, taskid)
    }
  }, [answer])

  return (
    <div className="OneanswerWriter-container">
      <div>
        <label className='Label-OneanswerWriter-Question'>
        <div className="OneanswerWriter-Task-serial-number">{questionNumber}. </div>
          <div className="OneanswerWriter-Question">
            {question}
          </div>
          </label>


      <div className="OneanswerWriter-Options">

          <div className="OneanswerWriter-Answers">
            <div className='Div-OneanswerWriter-Answers'>
              {answers[0].text}
            
            <label className="Label-OneanswerWriter-CorrectAnswer">
              <input
                className='Input-OneanswerWriter-CorrectAnswer'
                type="radio"
                checked={answer === 1}
                onChange={() => handleCorrectAnswerChange(1)}
              />
            </label>
            </div>
          </div>

          <div className="OneanswerWriter-Answers">
            <div className='Div-OneanswerWriter-Answers'>
              {answers[1].text}
            
            <label className="Label-OneanswerWriter-CorrectAnswer">
              <input
                className='Input-OneanswerWriter-CorrectAnswer'
                type="radio"
                checked={answer === 2}
                onChange={() => handleCorrectAnswerChange(2)}
              />
            </label>
            </div>
          </div>

          <div className="OneanswerWriter-Answers">
            <div className='Div-OneanswerWriter-Answers' >
              {answers[2].text}
            
            <label className="Label-OneanswerWriter-CorrectAnswer">
              <input
                className='Input-OneanswerWriter-CorrectAnswer'
                type="radio"
                checked={answer === 3}
                onChange={() => handleCorrectAnswerChange(3)}
              />
            </label>
            </div>
          </div>

          <div className="OneanswerWriter-Answers">
            <div className='Div-OneanswerWriter-Answers'>
              {answers[3].text}
        
            <label className="Label-OneanswerWriter-CorrectAnswer">
              <input
                className='Input-OneanswerWriter-CorrectAnswer'
                type="radio"
                checked={answer === 4}
                onChange={() => handleCorrectAnswerChange(4)}
              />
            </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneanswerWriter