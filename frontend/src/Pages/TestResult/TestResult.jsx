import React, {useState , useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import TrueFalseResult from '../../Components/TestComp/TasksResult/TrueFalseResult/TrueFalseResult';
import OneAnswerResult from '../../Components/TestComp/TasksResult/OneanswerResult/OneanswerResult';
import MultipleAnswersResult from '../../Components/TestComp/TasksResult/MultipleAnswersResult/MultipleAnswersResult';
import axios from "axios";
import { useParams } from 'react-router-dom';

const TestResult = () => {
  let {id} =useParams()
  let {usertestid} =useParams()
  const [tasks,setTasks] = useState([])
  const [answers,setAnswers] = useState([])
  const [useranswers,setUseranswers] = useState([])


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.post('http://localhost:8081/testresulttasks', { id });
        console.log("feladatok",response.data)
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [id]);

  useEffect(() => {
    let promises = tasks.map(task => {
      let taskid = task.id;
      return axios.post('http://localhost:8081/receivetestanswersresult', { taskid })
                 .then(res => res.data)
                 .catch(err => console.error(err));
    });
  
    Promise.all(promises)
      .then(answers => {
        
        setAnswers(answers);
      })
      .catch(err => console.error(err));
  }, [tasks]);

  useEffect(() => {
    console.log("válaszok",answers)
  },[answers])

  useEffect(() => {
    let promises = tasks.map(task => {
      let taskid = task.id;
      return axios.post('http://localhost:8081/receivetestuseranswersresult', { taskid })
                 .then(res => res.data)
                 .catch(err => console.error(err));
    });
  
    Promise.all(promises)
      .then(answers => {
        
        setUseranswers(answers);
      })
      .catch(err => console.error(err));
  }, [tasks]);


  useEffect(() => {
    console.log("diakválaszok",useranswers)
  },[useranswers])


  return (
   
    <div className='wholepage'>
      
      <Navbar />
      
      {tasks.length>0 && answers.length>0 && tasks.map((task, index) => {
                    
        if (task.type_id === 1) {
            return <TrueFalseResult key={task.id} questionNumber={index + 1} question={task.text} answers={answers[index]}  taskid={task.id}/>;
        }
        else if (task.type_id === 3) {
            return <OneAnswerResult key={task.id} questionNumber={index + 1} question={task.text} answers={answers[index]}   taskid={task.id}/>;
        }
        else if (task.type_id === 2) {
            return <MultipleAnswersResult key={task.id} questionNumber={index+1} question={task.text} answers={answers[index]} taskid={task.id} /> ;
        } else {
            return "null"; 
        }
      })}
      
    </div>
     
   

     
  
  )
}
export default TestResult

