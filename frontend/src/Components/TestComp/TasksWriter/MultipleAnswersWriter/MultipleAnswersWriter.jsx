import React,{useState, useEffect} from 'react';
import './MultipleAnswersWriter.css';

const MultipleAnswersWriter = ({ questionNumber, question, answers, onResponse,taskid  }) => {
    const [useranswers,setUseranswers] = useState([])


   
    const handleChange = (answerid) => {
        let newuseranswers = [];
        
        // Check if the answerid is already in useranswers
        if (useranswers.includes(answerid)) {
            // If it's already present, remove it
            newuseranswers = useranswers.filter(e => e !== answerid);
        } else {
            // If it's not present, add it
            newuseranswers = [...useranswers, answerid];
        }
        
        // Update the state with the new useranswers array
        setUseranswers(newuseranswers);
    }
    

     useEffect (() => {
        if (answers.length>0)
        {
            onResponse(useranswers, taskid, answers)
        }
        
       
     },[useranswers])


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
                        onChange = {() =>handleChange(answer.id)}
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
