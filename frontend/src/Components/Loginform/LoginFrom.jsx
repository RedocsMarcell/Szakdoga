import React, { useState,useEffect }from 'react';
import './LoginForm.css';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from 'axios'




  



const LoginForm = () => {
  const [userid,setUserid] = useState(-1)
  const [token, setToken] = useState('');
  const [username, setText] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event) {
    event.preventDefault();

    console.log (username, password)
    axios.post('http://localhost:8081/users', {username, password})
    .then(res => {
      localStorage.setItem('token', res.data.token);
      try {
               const tokenParts = res.data.token.split('.');
               const payload = JSON.parse(atob(tokenParts[1]));
              
               
               setUserid(payload)
               console.log(payload)
               
             } catch (error) {
               console.error('Error decoding token:', error);
             }
      
      
    })
    .catch(err => console.log(err));
 
  }


  

  // useEffect(() => {
  //   // Fetch token from local storage or session storage
  //   const storedToken = localStorage.getItem('token');
  //   if (storedToken) {
  //     try {
  //       const tokenParts = storedToken.split('.');
  //       const payload = JSON.parse(atob(tokenParts[1]));
        
  //       console.log(payload);
  //     } catch (error) {
  //       console.error('Error decoding token:', error);
  //     }
      
  //   }
  // }, []);



  


  return (
    <div className='fulllogin'>
      <div className="Login">
      <form onSubmit={handleSubmit}>
      <h1>Space Teszt <img src='favicon.ico' className='kep' width={30}></img>   </h1>
      
 
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
              
              <a href="#">Elfelejtetted a jelszavad?</a>
        </div>  
        
        <button type="submit"  >Bejelentkezés</button>
        
        <div className="register-link">
          <p> </p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;