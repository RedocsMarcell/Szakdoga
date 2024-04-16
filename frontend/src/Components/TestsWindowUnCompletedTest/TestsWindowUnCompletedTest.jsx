import React from 'react'
import './TestsWindowUnCompletedTest'
import { Link  } from 'react-router-dom';

const TestsWindowUnCompletedTest = ({ name, date, score,id }) => {

    return (
      <Link to={`/TestWriter/${id}`} className="TestWindow">
      
     
       
        <div className="name" >{ name }
  
        </div> 
  
        <div className="date"> { date }
  
        </div> 
        
        
  
       
  
       
    
    
    </Link>
    );
  }
  export default TestsWindowUnCompletedTest;