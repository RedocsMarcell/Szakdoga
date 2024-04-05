import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import './HomeStudent.css';
import Window from '../../../Components/Window/Window';

const HomeStudent = () => {
  return (
    <div className='wholepage'>
      <Navbar />
      
      <div className='DivLeft'>
        <Link to="http://localhost:3000/MyTestsStudent">
          <Window className='LeftWindow'/>
        </Link>
      </div>
      <div className='DivRight'>
        <Link to="http://localhost:3000/TestWriter">
          <Window className='RightWindow'/>
        </Link>
      </div>
    </div>
  );
}

export default HomeStudent;
