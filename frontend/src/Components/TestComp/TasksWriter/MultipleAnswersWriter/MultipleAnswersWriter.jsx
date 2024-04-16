import React from 'react';
import './MultipleAnswersWriter.css';

const MultipleAnswersWriter = ({ questionNumber, question, answers }) => {
    
    return (
        <div className="multiple-choice-container">
            <label>
                Question {questionNumber}:
                <div> {question} </div>   
            </label>
            <br />
            {answers.map((answer, index) => (
                <div key={index} className="answer-container">
                    <label>
                        Answer {index + 1}:
                        <div>
                            {answer.text}
                            <input
                        type="checkbox"
                    
                        readOnly
                    />
                        </div>
                    </label>
                    
                </div>
            ))}
        </div>
    );
};

export default MultipleAnswersWriter;
