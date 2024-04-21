import React, { useState, useEffect } from 'react'
import './OneanswerResult.css'
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";


function OneanswerResult({ questionNumber, question, answers,  useranswers,handleScore }) {
  const [chosenanswer,setChosenanswer] = useState(-1)
  const [score, setScore] = useState(0)
  

  useEffect (() => {
    const handleCorrect = () => {
      if (useranswers.length !=0)
      {
      const useranswerid = useranswers[0].AnswerId
      console.log(answers)
      console.log(useranswerid)
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].id === useranswerid) {
          
           setChosenanswer( i)
           if(answers[i].Correct ===1)
           {
            if(score !==1)
            {
              setScore(1)
            }
            
           }
           else
           {
            if(score !==0)
            {
              setScore(0)
            }
           }
           
        }
    }
      }
      
      
    }
    handleCorrect()


    
  },[useranswers])


  useEffect (() => {
    handleScore(score,1,"one"+questionNumber.toString())
    console.log("one")
  },[score])

  return (
    <div className="OneanswersResult-Container">
      <div className="OneanswersResult-Task-serial-number">{questionNumber} . </div>
      
      <div className='OneanswersResult-Score'>Score: {score}/1</div>
        <label className='Label-OneanswersResult'>
          <div className="OneanswersResult-Question">
            
            {question}
          </div>

         
          </label>
         

      <div className="OneanswersResult-Options">

          <div className="OneanswersResult-Answers">
            <div className='Div-OneanswersResult-Answers'>
              {answers[0].text}
            

            <label className="Label-OneanswersResult-CorrectAnswers">
              <input className="Input-OneanswersResult-Chosenanswers" type="radio" disabled checked = {chosenanswer===0 ? "checked" : ""}/>
              <div className='OneanswersResult-Noting'>{ chosenanswer===0 ?(answers[0].Correct === 1 ? <FcCheckmark /> :<FcCancel />) :(answers[0].Correct === 1 ? <FcCheckmark /> :"")}</div>
            </label>
          </div>
          </div>

          <div className="OneanswersResult-Answers">
            <div className='Div-OneanswersResult-Answers'>
              {answers[1].text}
            

            <label className="Label-OneanswersResult-CorrectAnswers">
              <input className="Input-OneanswersResult-Chosenanswers" type="radio" disabled checked = {chosenanswer===1 ? "checked" : ""}/>
              <div className='OneanswersResult-Noting'>{ chosenanswer===1 ?(answers[1].Correct === 1 ? <FcCheckmark /> :<FcCancel />) :(answers[1].Correct === 1 ? <FcCheckmark /> :"")}</div>
            </label>
          </div>
          </div>

          <div className="OneanswersResult-Answers">
            <div className='Div-OneanswersResult-Answers'>
              {answers[2].text}
            

            <label className="Label-OneanswersResult-CorrectAnswers">
              <input className="Input-OneanswersResult-Chosenanswers" type="radio" disabled checked = {chosenanswer===2 ? "checked" : ""}/>
              <div className='OneanswersResult-Noting'>{ chosenanswer===2 ?(answers[2].Correct === 1 ? <FcCheckmark /> :<FcCancel />) :(answers[2].Correct === 1 ? <FcCheckmark /> :"")}</div>
            </label>
          </div>
          </div>
          
          <div className="OneanswersResult-Answers">
            <div className='Div-OneanswersResult-Answers'>
              {answers[3].text}
            

            <label className="Label-OneanswersResult-CorrectAnswers">
              <input className="Input-OneanswersResult-Chosenanswers" type="radio" disabled checked = {chosenanswer===3 ? "checked" : ""}/>
              <div className='OneanswersResult-Noting'>{ chosenanswer===3 ?(answers[3].Correct === 1 ? <FcCheckmark /> :<FcCancel />) :(answers[3].Correct === 1 ? <FcCheckmark /> :"")}</div>
            </label>
          </div>
          </div>
        </div>
      
    </div>
  )
}

export default OneanswerResult