import React, { useState }from 'react';
import './LoginForm.css';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from 'axios'

const LoginForm = () => {
  const [username, setText] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event) {
    event.preventDefault();

    console.log (username, password)
    axios.post('http://localhost:8081/users', {username, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
 
  }
  return (
      <div className="asd">
      <form onSubmit={handleSubmit}>
      
      <h1>Space Teszt <img src='moon.ico' className='kep' width={30}></img> 

        </h1>
 
        <div className="input-box">
        
      
          <input type="text" placeholder='Felhasználónév' required 
            onChange={e => setText(e.target.value)} />
          <FaUserAstronaut className='icon' />        
       
        </div>

        <div className="input-box">
          
          <input type="password" placeholder='Jelszó' required 
            onChange={e => setPassword(e.target.value)}/>
          <FaLock className='icon' />

        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Emlékezz rám</label>
          <a href="#">Elfelejtetted a jelszavad?</a>
        </div>  
        
        <button type="submit">Bejelentkezés</button>
        
        <div className="register-link">
          <p> </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;