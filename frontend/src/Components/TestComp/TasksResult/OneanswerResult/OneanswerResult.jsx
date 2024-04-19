import React, { useState, useEffect } from 'react'
import './OneanswerResult.css'

function OneanswerResult({ questionNumber, question, answers, taskid }) {
  

  return (
    <div className="one-answers-container">
      <div className="question">
        <label>
          <div>
            <div className="Task-serial-number">{questionNumber}. </div>
            {question}
          </div>
          </label>


      <div className="options">

          <div className="option-row">
            <div>
              {answers[0].text}
            </div>
            <label className="option-label">
              <div>correct?</div>
            </label>
          </div>

          <div className="option-row">
            <div>
              {answers[1].text}
            </div>
            <label className="option-label">
            <div>correct?</div>
            </label>
          </div>

          <div className="option-row">
            <div>
              {answers[2].text}
            </div>
            <label className="option-label">
            <div>correct?</div>
            </label>
          </div>

          <div className="option-row">
            <div>
              {answers[3].text}
            </div>
            <label className="option-label">
            <div>correct?</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneanswerResult