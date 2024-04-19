import React, { useState, useEffect } from 'react'
import './OneanswerResult.css'

function OneanswerResult({ questionNumber, question, answers,  useranswers,handleScore }) {
  const [chosenanswer,setChosenanswer] = useState(-1)
  const [score, setScore] = useState(0)
  

  useEffect (() => {
    const handleCorrect = () => {
      if (useranswers.length !=0)
      {
      const useranswerid = useranswers[0].AnswerId
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].id === useranswerid) {
           setChosenanswer( i)
           if(answers[i].Correct ===1)
           {
            setScore(1)
           }
           else
           {
            setScore(0)
           }
           
        }
    }
      }
      
      
    }
    handleCorrect()


    
  },[useranswers])


  useEffect (() => {
    handleScore(score,1)
  },[score])

  return (
    <div className="one-answers-container">
      <div className="question">
        <label>
          <div>
            <div className="Task-serial-number">{questionNumber}. </div>
            {question}
          </div>
          <div>Score: {score}/1</div>
          </label>


      <div className="options">

          <div className="option-row">
            <div>
              {answers[0].text}
            </div>
            <label className="option-label">
              <input type="radio" disabled checked = {chosenanswer===0 ? "checked" : ""}/>
              <div>{ chosenanswer===0 ?(answers[0].Correct === 1 ? "Y" :"X") :(answers[0].Correct === 1 ? "Y" :"Nincs mit mutatni")}</div>
            </label>
          </div>

          <div className="option-row">
            <div>
              {answers[1].text}
            </div>
            <label className="option-label">
            <input type="radio" disabled checked = {chosenanswer===1 ? "checked" : ""}/>
            <div>{ chosenanswer===1 ?(answers[1].Correct === 1 ? "Y" :"X") :(answers[1].Correct === 1 ? "Y" :"Nincs mit mutatni")}</div>
            </label>
          </div>

          <div className="option-row">
            <div>
              {answers[2].text}
            </div>
            <label className="option-label">
            <input type="radio" disabled checked = {chosenanswer===2 ? "checked" : ""}/>
            <div>{ chosenanswer===2 ?(answers[2].Correct === 1 ? "Y" :"X") :(answers[2].Correct === 1 ? "Y" :"Nincs mit mutatni")}</div>
            </label>
          </div>
          

          <div className="option-row">
            <div>
              {answers[3].text}
            </div>
            <label className="option-label">
            <input type="radio" disabled checked = {chosenanswer===3 ? "checked" : ""}/>
            <div>{ chosenanswer===3 ?(answers[3].Correct === 1 ? "Y" :"X") :(answers[3].Correct === 1 ? "Y" :"Nincs mit mutatni")}</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneanswerResult