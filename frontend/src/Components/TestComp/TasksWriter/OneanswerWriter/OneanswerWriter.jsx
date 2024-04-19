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
    <div className="one-answers-container">
      <div >
        <label>
        <div className="Task-serial-number">{questionNumber} . </div>
          <div className='questiondiv'>
            
         {question}
          </div>
          </label>


      <div className="options">

          <div className="option-row">
            <div className='answerwriter'>
              {answers[0].text}
            </div>
            <label className="option-label">
              <input
                type="radio"
                className='radiowriter'
                checked={answer === 1}
                onChange={() => handleCorrectAnswerChange(1)}
              />
            </label>
          </div>

          <div className="option-row">
            <div className='answerwriter'>
              {answers[1].text}
            </div>
            <label className="option-label">
              <input
                type="radio"
                className='radiowriter'
                checked={answer === 2}
                onChange={() => handleCorrectAnswerChange(2)}
              />
            </label>
          </div>

          <div className="option-row">
            <div className='answerwriter'>
              {answers[2].text}
            </div>
            <label className="option-label">
              <input
                type="radio"
                className='radiowriter'
                checked={answer === 3}
                onChange={() => handleCorrectAnswerChange(3)}
              />
            </label>
          </div>

          <div className="option-row">
            <div className='answerwriter'>
              {answers[3].text}
            </div>
            <label className="option-label">
              <input
                type="radio"
                className='radiowriter'
                checked={answer === 4}
                onChange={() => handleCorrectAnswerChange(4)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneanswerWriter