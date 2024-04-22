import React, { useState,useEffect } from 'react';
import './TrueFalseResult.css';

const TrueFalseResult = ({questionNumber,question,answers,useranswers,handleScore }) => {
  const [truechosen, setTruechosen] = useState(null)
  const [correctanswertrue, setCorrectanswertrue] = useState(null)
  const [correctanswerfalse, setCorrectanswerfalse] = useState(null)
  const [score,setScore ] = useState(0)

  
  
  useEffect (() => {
    const handleCorrect = () => {
      const useranswerid = useranswers[0].AnswerId 
      
      for (let i = 0; i < answers.length; i++) {
          if (answers[i].id === useranswerid) {
             setTruechosen( answers[i].text === 'igaz')
             if(answers[i].Correct == 1)
             {
              setScore(1)
             }
             else
             {
              setScore(0)
             }
             
          }
      }
      setCorrectanswertrue(answers[0].Correct === 1 ? true : false)
      setCorrectanswerfalse( answers[1].Correct === 1 ? true : false)
    }
    handleCorrect()

    
  },[useranswers])
 
  
  useEffect (() => {
    handleScore(score,1,"true")
    console.log("true")
  },[score])

  
  

  return (
    
      <div className="TrueFalseResult-Container">
        <label className="Label-TrueFalseResult">
        <div className= "TrueFalseResult-Task-Serial-Number">  {questionNumber} . </div>
          <div className='TrueFalseResult-Question'>
          {question}
          </div>
          <div className='TrueFalseResult-Score'>Pont: {score}/1</div>
        </label>
         <div className='TrueFalseResult-CorrectAnswer'>
          {truechosen !==null && 
          
          <div  className={truechosen === true? (correctanswertrue ? 'correct' : 'incorrect') : (correctanswertrue ? 'correct' : "")}>Igaz</div>
          }
          <br></br>
          <div  className={ truechosen ===false ? (correctanswertrue ? 'incorrect' : 'correct') : (correctanswertrue ? '' : 'correct')}>Hamis</div>
          </div>

        <br/>
        
     
    </div>
  );
}

export default TrueFalseResult;
