import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar';
import TestsWindow from '../../../Components/TestWindow/TestsWindow';
import './MyTestsTeacher.css';

const MyTestsTeacher = () => {
  return (
   
    <div className='wholepage'>
      
      <Navbar />
      <div className="grid">

      <TestsWindow name = "Teszt1" date = "2023.10.12" score = "10/10" />

      <TestsWindow name = "Teszt2" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt3" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt4" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt5" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt6" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt7" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt8" date = "2023.10.12" score = "10/10"/>

      <TestsWindow name = "Teszt9" date = "2023.10.12" score = "10/10"/>
      
      </div>
    </div>

     
   

     
  
  )
}
 
export default MyTestsTeacher

