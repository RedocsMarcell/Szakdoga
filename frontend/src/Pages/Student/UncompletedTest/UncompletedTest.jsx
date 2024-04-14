import React from 'react'
import TestsWindowUnCompletedTest from '../../../Components/TestsWindowUnCompletedTest/TestsWindowUnCompletedTest'
import Navbar from '../../../Components/Navbar/Navbar'


function UncompletedTest() {
  

    const testbool= true



 

  return (
    <div className='wholepage' hidden={testbool ? "" : "hidden"}>
      
      <Navbar />
      
      
      <div className="grid">
    
      <TestsWindowUnCompletedTest name = "Teszt1" date = "2023.10.12" score = "10/-" />

      <TestsWindowUnCompletedTest name = "Teszt2" date = "2023.10.12" score = "10/-"/>

      <TestsWindowUnCompletedTest name = "Teszt3" date = "2023.10.12" score = "10/-"/>

      <TestsWindowUnCompletedTest name = "Teszt4" date = "2023.10.12" score = "10/-"/>

      <TestsWindowUnCompletedTest name = "Teszt5" date = "2023.10.12" score = "10/-"/>

      <TestsWindowUnCompletedTest name = "Teszt6" date = "2023.10.12" score = "10/-"/>

      <TestsWindowUnCompletedTest name = "Teszt7" date = "2023.10.12" score = "10/-"/>

      <TestsWindowUnCompletedTest name = "Teszt8" date = "2023.10.12" score = "10/-"/>

      <TestsWindowUnCompletedTest name = "Teszt9" date = "2023.10.12" score = "10/-"/>
      
      </div>
    </div>
  )
}

export default UncompletedTest
