import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar';
import './HomeTeacher.css';
import Window from '../../../Components/Window/Window';
import { Link } from 'react-router-dom';

const HomeTeacher = () => {
  return (
    <div className='wholepage'>
      
      <Navbar />

      <div className='DivLeft'>
        <Link to="http://localhost:3000/MyTestsTeacher">
          <Window className='LeftWindow'/>
        </Link>
      </div>
      <div className='DivRight'>
        <Link to="http://localhost:3000/TestMaker">
          <Window className='RightWindow'/>
        </Link>
      </div>
    </div>
  );
}

export default HomeTeacher
