import React,{ useState,useEffect} from 'react'
import MultipleAnswersWriter from '../../../Components/TestComp/TasksWriter/MultipleAnswersWriter/MultipleAnswersWriter'
import OneAnswerWriter from '../../../Components/TestComp/TasksWriter/OneanswerWriter/OneanswerWriter'
import TrueFalseWriter from '../../../Components/TestComp/TasksWriter/TrueFalseWriter/TrueFalseWriter'
import "./TestBoardWriter.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Timer from '../../Timer/Timer'







function TestBoardWriter() {
  let {id} =useParams()
  let {usertestid} =useParams()
  const [tasks,setTasks] = useState([])
  const [answers,setAnswers] = useState([])
  const [useranswers,setUseranswers] = useState([])
  const [testname,setTesname] = useState("")
  const [testduration,setTestduration] = useState(60)
  const [startTime, setStartTime] = useState(null);
  const [remainingMinutes, setRemainingMinutes] = useState(60);
  const [remainingSeconds, setRemainingSeconds] = useState(0);


  useEffect(() => {
    const elapsedTimeInSeconds = Math.floor((Date.now() - startTime) / 1000); // Calculate elapsed time in seconds
    const remainingTimeInSeconds = Math.max(testduration * 60 - elapsedTimeInSeconds, 0); // Calculate remaining time, ensuring it doesn't go negative
    const remainingMinutes = Math.floor(remainingTimeInSeconds / 60); // Calculate remaining minutes
    const remainingSeconds = remainingTimeInSeconds % 60; // Calculate remaining seconds
    setRemainingMinutes(remainingMinutes);
    setRemainingSeconds(remainingSeconds);
    console.log(remainingMinutes)
    console.log(remainingSeconds)
  }, [startTime, testduration]);
  


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.post('http://localhost:8081/receivetestswriting', { id });
        
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [id]);

  useEffect(() => {
    const fetchTestInformation = async () => {
      try {
        const response = await axios.post('http://localhost:8081/receivetestwritinginformation', { id });
        console.log("adatok",response.data)
        setTesname(response.data[0].Name)
        setTestduration(response.data[0].Time)
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestInformation();
  }, [id]);

  useEffect(() => {
    let promises = tasks.map(task => {
      let taskid = task.id;
      return axios.post('http://localhost:8081/receivetestanswerswriting', { taskid })
                 .then(res => res.data)
                 .catch(err => console.error(err));
    });
  
    Promise.all(promises)
      .then(answers => {
        
        setAnswers(answers);
      })
      .catch(err => console.error(err));
  }, [tasks]);

  
  

  const handleTrueFalse = (answer,taskid) => {
    const filtereduseranswers = useranswers.filter(e => e.TaskId !== taskid)
    const newuseranswer = {
      UserTestId: usertestid,
      AnswerId : answer,
      TaskId : taskid
    }
    setUseranswers([...filtereduseranswers,newuseranswer])

  }

  const handleOneAnswer = (answer,taskid,) => {
    const filtereduseranswers = useranswers.filter(e => e.TaskId !== taskid)
    const newuseranswer = {
      UserTestId: usertestid,
      AnswerId : answer,
      TaskId : taskid
    }
    setUseranswers([...filtereduseranswers,newuseranswer])

  }

  const handleMulltipleAnswer = (answer,taskid,answers) => {
    let answerlist = []
    
    answers.forEach(e => { answerlist.push(e.id) });
    
    const  newuseranswer = [...useranswers]
    const filtereduseranswers = newuseranswer.filter (e => !answerlist.includes(e.AnswerId))
    let newadduseranswers = []
    
    answer.forEach(e => {
      const newuseranswerdict = {
        UserTestId: usertestid,
        AnswerId : e,
        TaskId : taskid
      }
      newadduseranswers.push(newuseranswerdict)
    })
    
    setUseranswers([...filtereduseranswers,...newadduseranswers])


  }

  useEffect (() => {
    console.log("asd",useranswers)
  },[useranswers])

  const handleSave = () => {
    console.log(useranswers)
                
    axios.post('http://localhost:8081/senduseranswers', {
        answers: useranswers,
        usertestid : usertestid
        
    })
    window.location.href = 'http://localhost:3000/MyTestsStudent'
  }
  const handleTimer= (minutes,seconds) => {
    if(minutes===0 && seconds ===0)
    {
      handleSave()
      
    }
  }
  useEffect(() => {
    setStartTime(localStorage.getItem('starttime'));
  }, []);

  
    
  
  return (
    <div className="TestBoardWriter-Container">
            <div className="TestBoardWriter-Taskname-Timer">
              <div className='TestBoardWriter-Tasksname'> Dolgozat neve:{testname}</div>
              <div className='TestBoardWriter-Timer'>Hátralévő idő: <Timer handleTimer={handleTimer } minutes_base={remainingMinutes} seconds_base={remainingSeconds}/> </div>
            </div>
            
            <div className="test-board">

                
                {tasks.length>0 && answers.length>0 && tasks.map((task, index) => {
                    
                     if (task.type_id === 1) {
                         return <TrueFalseWriter key={task.id} questionNumber={index + 1} question={task.text} answers={answers[index]} onResponse={handleTrueFalse} taskid={task.id}/>;
                     }
                     else if (task.type_id === 3) {
                        return <OneAnswerWriter key={task.id} questionNumber={index + 1} question={task.text} answers={answers[index]} onResponse={handleOneAnswer}  taskid={task.id}/>;
                     }
                     else if (task.type_id === 2) {
                        return <MultipleAnswersWriter key={task.id} questionNumber={index+1} question={task.text} answers={answers[index]} onResponse={handleMulltipleAnswer} taskid={task.id} /> ;
                    } else {
                        return "null"; 
                    }
            })}
              
              <div className="finish-quiz-button-container">
              <button className="finish-quiz-button" disabled={tasks.length === 0}
              onClick={handleSave}>
                Dolgozat Beküldése
                </button>
                </div>

            </div>
        </div>
  )
}

export default TestBoardWriter
