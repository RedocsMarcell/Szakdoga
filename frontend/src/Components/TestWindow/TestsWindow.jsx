import React from 'react';
import './TestsWindow.css';
import { Link  } from 'react-router-dom';

const TestsWindow = ({ name, date, score }) => {

  return (
    <Link to="/TestResult" className="TestWindow">
    
   
     
      <div className="name" >{ name }

      </div> 

      <div className="date"> { date }

      </div> 
      
      <div className="score"> { score }

      </div>

     
  
  
  </Link>
  );
}
export default TestsWindow;