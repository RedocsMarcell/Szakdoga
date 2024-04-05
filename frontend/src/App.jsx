import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import LoginForm from './Components/Loginform/LoginFrom';
import ClassEditor from './Pages/Admin/ClassEditor/ClassEditor';
import UserEditor from './Pages/Admin/UserEditor/UserEditor';
import HomeAdmin from './Pages/Admin/HomeAdmin/HomeAdmin';
import PasswordChange from './Pages/PasswordChange/PasswordChange';
import HomeStudent from './Pages/Student/HomeStudent/HomeStudent';
import MyTestsStudent from './Pages/Student/MyTestsStudent/MyTestsStudent';
import TestWriter from './Pages/Student/TestWriter/TestWriter';
import HomeTeacher from './Pages/Teacher/HomeTeacher/HomeTeacher';
import MyTestsTeacher from './Pages/Teacher/MyTestsTeacher/MyTestsTeacher';
import TestMaker from './Pages/Teacher/TestMaker/TestMaker';
import TestResult from './Pages/TestResult/TestResult';
import MyProfilTeacher from './Pages/Teacher/MyProfilTeacher/MyProfilTeacher';
import MyProfilStudent from './Pages/Student/MyProfilStudent/MyProfilStudent';


function App() {
  return (
    
    
    <BrowserRouter>
      <Routes>
      
    
       
       <Route path='/' element={<LoginForm />}></Route>
       <Route path='/login' element={<LoginForm />}></Route>
       <Route path='/ClassEditor' element={<ClassEditor />}></Route>
       <Route path='/UserEditor' element={<UserEditor />}></Route>
       <Route path='/HomeAdmin' element={<HomeAdmin />}></Route>
       <Route path='/PasswordChange' element={<PasswordChange />}></Route>
       <Route path='/HomeStudent' element={<HomeStudent />}></Route>
       <Route path='/MyTestsStudent' element={<MyTestsStudent />}></Route>
       <Route path='/TestWriter' element={<TestWriter />}></Route>
       <Route path='/HomeTeacher' element={<HomeTeacher />}></Route>
       <Route path='/MyTestsTeacher' element={<MyTestsTeacher />}></Route>
       <Route path='/TestMaker' element={<TestMaker />}></Route>
       <Route path='/TestResult' element={<TestResult />}></Route>
       <Route path='/MyProfilStudent' element={<MyProfilStudent />}></Route>
       <Route path='/MyProfilTeacher' element={<MyProfilTeacher />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
 