import React, { useState } from 'react';
import './TestBoard.css';
import TrueFalse from '../Tasks/TrueFalse/TrueFalse';
import OneAnswer from '../Tasks/Oneanswer/OneAnswer';
import MultipleAnswers from '../Tasks/MultipleAnswers/MultipleAnswers';


function TestBoard() {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [quizTitle, setQuizTitle] = useState('');
    const [quizTime, setQuizTime] = useState('');

    const[tasks, setTask] = useState ([]);
    const [showOptions, setShowOptions] = useState(false);
    const [keyid,setKeyId] = useState(1)

    const addTask = (questionTypeNumber) => {

        const newTask = {
            id:keyid,
            question: `Question ${tasks.length +1}`,
            questionType: questionTypeNumber,
            answer: "",
            correctanswer : "",
        };
        setKeyId(keyid+1)
        setTask([...tasks, newTask]);
    };
    

    const removeTask = (taskNumber) =>{
        let key

         for ( let i=0; i<tasks.length;i++)

         {
            if(i===taskNumber-1)
            {
               key=tasks[i]["id"]
            }
         }
         const updatedtasks = tasks.filter(task => task.id !==key )
         setTask(updatedtasks)
         console.log(updatedtasks)
    }


   
  

    function toggleOptions() {
        setShowOptions(!showOptions);
    }

    function handleQuestionClick(questionType) {
        
        let taskNumber = -1
        if(questionType === 'Igaz/Hamis' )
        {
            taskNumber = 1
        } else if (questionType === 'Több helyes válasz')
        {
            taskNumber = 2
        } else if (questionType === 'Egy helyes válasz')
        {
            taskNumber = 3
        } 

        addTask(taskNumber)
        
        setShowOptions(false); // Itt beállítjuk a showOptions értékét false-ra, hogy az opciók eltűnjenek
    }
    const handleTrueFalseResponse = (question, answer,questionNumber,correctanswer) => {
        // Do something with the received question and answer, such as updating state
        tasks[questionNumber-1]["question"] = question
        tasks[questionNumber-1]["answer"] = answer
        tasks[questionNumber-1]["correctanswer"] = correctanswer
        console.log(tasks[questionNumber-1]["question"])
        console.log(tasks[questionNumber-1]["answer"])
        console.log(tasks[questionNumber-1]["correctanswer"])
        

    };

    const handleMultipleAnswersResponse = (question, answer,questionNumber,correctanswer) => {
        // Do something with the received question and answer, such as updating state
        tasks[questionNumber-1]["question"] = question
        tasks[questionNumber-1]["answer"] = answer
        tasks[questionNumber-1]["correctanswer"] = correctanswer
        console.log(tasks[questionNumber-1]["question"])
        console.log(tasks[questionNumber-1]["answer"])
        console.log(tasks[questionNumber-1]["correctanswer"])

    };


    const handleOneAnswerResponse = (question, answer,questionNumber,correctanswer) => {
        // Do something with the received question and answer, such as updating state
        tasks[questionNumber-1]["question"] = question
        tasks[questionNumber-1]["answer"] = answer
        tasks[questionNumber-1]["correctanswer"] = correctanswer
        console.log(tasks[questionNumber-1]["question"])
        console.log(tasks[questionNumber-1]["answer"])
        console.log(tasks[questionNumber-1]["correctanswer"])

    };
    
 

    return (
        <div className="test-board-container">
            <div className="test-board">
                <div className="row">
                    <div className="input-group">
                        <label htmlFor="class">Osztály:</label>
                        <select id="class" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                            <option value="">Válassz osztályt...</option>
                            {/* Ide jönnek az előre megadott osztályok például: */}
                            <option value="10.A">10.A</option>
                            <option value="11.A">11.A</option>
                            <option value="12.B">12.B</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="subject">Tantárgy:</label>
                        <select id="subject" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                            <option value="">Válassz tantárgyat...</option>
                            {/* Ide jönnek az előre megadott tantárgyak például: */}
                            <option value="Matematika">Matematika</option>
                            <option value="Irodalom">Irodalom</option>
                            <option value="Biologia">Biologia</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group wide">
                        <label htmlFor="quizTitle">Dolgozat címe:</label>
                        <input type="text" id="quizTitle" value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="quizTime">Dolgozat időtartama:</label>
                        <input type="text" id="quizTime" value={quizTime} onChange={(e) => setQuizTime(e.target.value)} />
                    </div>
                </div>
                


                <div className="task-button-container">
                    <button className="task-button" onClick={toggleOptions}>
                        +
                    </button>
                    {showOptions && (
                        <div className="options-container">
                        <div className="option" onClick={() => handleQuestionClick('Igaz/Hamis')}>
                            Igaz/Hamis
                        </div>
                        <div className="option" onClick={() => handleQuestionClick('Több helyes válasz')}>
                            Több helyes válasz
                        </div>
                        <div className="option" onClick={() => handleQuestionClick('Egy helyes válasz')}>
                            Egy helyes válasz
                        </div>
                        </div>
                    )}
                      
                </div>

                
                {tasks.map((task, index) => {
                    
                    if (task.questionType === 1) {
                        return <TrueFalse key={task.id} questionvalue={task.question}questionNumber={index + 1} onResponse={handleTrueFalseResponse} removeTask = {removeTask}/>;
                    } else if (task.questionType === 3) {
                        return <OneAnswer key={task.id} questionNumber={index + 1} onResponse={handleOneAnswerResponse} removeTask = {removeTask}/>;
                    } else if (task.questionType === 2) {
                        return <MultipleAnswers key={task.id} questionNumber={index + 1} onResponse={handleMultipleAnswersResponse} removeTask = {removeTask} />;
                    } else {
                        return null; 
                    }
            })}
              
                

            </div>
        </div>


    );

}

export default TestBoard;
