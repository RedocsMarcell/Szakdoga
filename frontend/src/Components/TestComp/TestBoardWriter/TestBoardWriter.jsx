import React,{ useState} from 'react'
import MultipleAnswersWriter from '../../../Components/TestComp/TasksWriter/MultipleAnswersWriter/MultipleAnswersWriter'
import "./TestBoardWriter.css"

const defaultstate = [
  {
    id:1,
    question: "Igaz-e",
    questionType : 2,
    answers: ["elso","maosdik"]

  }
]




function TestBoardWriter() {
  const [tasks,setTasks] = useState(defaultstate)
  return (
    <div className="test-board-container">
            <div className="test-board">

                
                {tasks.map((task, index) => {
                    
                    // if (task.questionType === 1) {
                    //     return <TrueFalse key={task.id} questionvalue={task.question}questionNumber={index + 1} />;
                    // } else if (task.questionType === 3) {
                    //     return <OneAnswer key={task.id} questionNumber={index + 1} />;
                    //} else
                     if (task.questionType === 2) {
                        return <MultipleAnswersWriter questionNumber={1} question={task.question} answers={task.answers} /> ;
                    } else {
                        return null; 
                    }
            })}
              
              {/* <div className="finish-quiz-button-container">
              <button className="finish-quiz-button" disabled={tasks.length === 0}
              onClick={() => {
                console.log(tasks)
                let taskdetails = {
                    class : selectedClass,
                    subject : selectedSubject,
                    quiztitle : quizTitle,
                    quiztime : quizTime
                }
                axios.post('http://localhost:8081/dolgozatok', {
                    tasks: tasks,
                    taskdetails : taskdetails
                })
              }}>
                Dolgozat véglegesítés
                </button>
                </div> */}

            </div>
        </div>
  )
}

export default TestBoardWriter
