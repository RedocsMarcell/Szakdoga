import React,{useState, useEffect} from 'react';
import './MultipleAnswersResult.css';
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

const MultipleAnswersResult = ({ questionNumber, question, answers, useranswers ,handleScore }) => {
    const [chosenanswer,setChosenanswer] = useState([])
    const [score,setScore] = useState(0)
    const [maxscore, setMaxScore] = useState(0)

    useEffect (() => {
        const handleCorrect = () => {
            const newChosenAnswer = [];
            let newscore = 0
           

            for (let i =0;i<useranswers.length;i++)
            {
                
                if (useranswers[i].length !==0)
                {
                    const useranswerid = useranswers[i].AnswerId 
                    for (let j = 0; j < answers.length; j++) {
                        if (answers[j].id === useranswerid) {
                            newChosenAnswer.push(j)
                            if(answers[j].Correct === 1)
                            {
                                
                               
                                newscore = newscore+ 1
                                setScore(newscore)
                            }
                         
                        }
                    }
                }
                
            }
            let newmaxscore = 0
            for (let i=0; i<answers.length;i++)
            {
                if(answers[i].Correct ===1)
                {
                    newmaxscore = newmaxscore +1

                }
            }
            setMaxScore(newmaxscore)
            setChosenanswer(newChosenAnswer)
          
          
          
          
        }
        handleCorrect()
        
        
      },[useranswers])
      useEffect (() => {
        handleScore(score,maxscore,"multi")
        
      },[score])

      

    return (
        <div className="Multiple-MultipleAnswersResult-Container">
                          <div className= "MultipleAnswersResult-Task-Serial-Number">  {questionNumber} . </div>
                          <div className='MultipleAnswersResult-Score'>Pont: {score}/{useranswers.length} </div> 
            <label className='Label-MultipleAnswersResult'>
                <div className='MultipleAnswersResult-Question'> {question} </div>  
            </label>
            
            <br />
            {answers.map((answer, index) => (
                <div key={index} className="MultipleAnswersResult-Answer-Container">
                    <label className='Label-MultipleAnswersResult-Answer'>
                    <input className='Input-MultipleAnswersResult' type="radio" disabled checked = {chosenanswer.includes(index) ? "checked" : ""}/>
                        <div className='MultipleAnswersResult-Correct'>{ chosenanswer.includes(index) ?(answers[index].Correct === 1 ? <FcCheckmark /> :<FcCancel />) :(answers[index].Correct === 1 ? <FcCheckmark /> :"")}</div>
                        <div className='MultipleAnswersResult-Answer'>
                            {answer.text}
                        
                        </div>
                    </label>
                    
                </div>
            ))}
        </div>
    );
};

export default MultipleAnswersResult;
