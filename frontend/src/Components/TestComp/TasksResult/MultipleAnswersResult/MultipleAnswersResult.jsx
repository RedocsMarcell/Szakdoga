import React,{useState, useEffect} from 'react';
import './MultipleAnswersResult.css';

const MultipleAnswersResult = ({ questionNumber, question, answers, useranswers ,handleScore }) => {
    const [chosenanswer,setChosenanswer] = useState([])
    const [score,setScore] = useState(0)

    useEffect (() => {
        const handleCorrect = () => {
            const newChosenAnswer = [];
            setScore(0)
            for (let i =0;i<useranswers.length;i++)
            {
                
                if (useranswers[i].length !==0)
                {
                    const useranswerid = useranswers[i].AnswerId 
                    for (let j = 0; j < answers.length; j++) {
                        if (answers[j].id === useranswerid) {
                            newChosenAnswer.push(j)
                            if(answers[i].Correct === 1)
                            {
                                let newscore = score
                                newscore += 1
                                setScore(newscore)
                            }
                         
                        }
                    }
                }
                
            }
            setChosenanswer(newChosenAnswer)
          
          
          
          
        }
        handleCorrect()
        
        
      },[useranswers])
      useEffect (() => {
        handleScore(score,useranswers.length)
      },[score])

      

    return (
        <div className="multiple-choice-container">
            <label>
                <div className= "Task-serial-number">  {questionNumber} . </div>
                <div> {question} </div>  
                <div>Score: {score}/{useranswers.length} </div> 
            </label>
            <br />
            {answers.map((answer, index) => (
                <div key={index} className="answer-container">
                    <label>
                        Answer {index + 1}:
                        <div>
                            {answer.text}
                        <input type="radio" disabled checked = {chosenanswer.includes(index) ? "checked" : ""}/>
                        <div>{ chosenanswer.includes(index) ?(answers[index].Correct === 1 ? "Y" :"X") :(answers[index].Correct === 1 ? "Y" :"Nincs mit mutatni")}</div>
                        </div>
                    </label>
                    
                </div>
            ))}
        </div>
    );
};

export default MultipleAnswersResult;
