import React,{useState,useEffect} from 'react'
import './OneanswerWriter.css'


function OneanswerWriter({questionNumber,question,answers,onResponse,taskid }) {
  
  const [answer, setAnswer] = useState(0)

  const handleCorrectAnswerChange = (number) => {
    setAnswer(number)
  }

  useEffect(() => {
    if (answer !==0)
    {
      onResponse(answers[answer-1].id,taskid)
    }
    
  },[answer])



  return (

    <div className="one-answers-container">
        <div className="question">
          <label>
          Question {questionNumber}:
          <div>
            {question}
          </div>
            
          </label>
          <div className="options">
            
                <div>
                  {answers[0].text}
                </div>

                  
                <label>
                  <input
                    type="radio"
                    checked={answer === 1}
                    onChange={() => handleCorrectAnswerChange(1)}
                    
                  />
                </label>
                <br/>
                <div>
                  {answers[1].text}
                </div>

                  
                <label>
                  <input
                    type="radio"
                    checked={answer === 2}
                    onChange={() => handleCorrectAnswerChange(2)}
                    
                  />
                </label>
                <br/>
                <div>
                  {answers[2].text}
                </div>

                  
                <label>
                  <input
                    type="radio"
                    checked={answer === 3}
                    onChange={() => handleCorrectAnswerChange(3)}
                 
                    
                  />
                </label>
                <br/>
                <div>
                  {answers[3].text}
                </div>

                  
                <label>
                  <input
                    type="radio"
                    checked={answer === 4}
                    onChange={() => handleCorrectAnswerChange(4)}
                  />
                </label>
                <br/>
              
          </div>
          
          <br/>
          
          <br/>
          
        </div>
    
    </div>
  )
}

export default OneanswerWriter
