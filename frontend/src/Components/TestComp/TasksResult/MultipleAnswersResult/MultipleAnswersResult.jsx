import React,{useState, useEffect} from 'react';
import './MultipleAnswersResult.css';

const MultipleAnswersResult = ({ questionNumber, question, answers,taskid  }) => {
    


    return (
        <div className="multiple-choice-container">
            <label>
                <div className= "Task-serial-number">  {questionNumber} . </div>
                <div> {question} </div>   
            </label>
            <br />
            {answers.map((answer, index) => (
                <div key={index} className="answer-container">
                    <label>
                        Answer {index + 1}:
                        <div>
                            {answer.text}
                        <div>Correct?</div>
                        </div>
                    </label>
                    
                </div>
            ))}
        </div>
    );
};

export default MultipleAnswersResult;
