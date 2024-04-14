import React from 'react'
import './TestsWindowUnCompletedTest'
import { Link  } from 'react-router-dom';

const TestsWindowUnCompletedTest = ({ name, date, score }) => {

    return (
      <Link to="/TestWriter" className="TestWindow">
      
     
       
        <div className="name" >{ name }
  
        </div> 
  
        <div className="date"> { date }
  
        </div> 
        
        <div className="score"> { score }
  
        </div>
  
       
    
    
    </Link>
    );
  }
  export default TestsWindowUnCompletedTest;