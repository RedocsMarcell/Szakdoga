import React, { useEffect } from 'react'
import './Timer.css'



const Timer = ({time}) => {

const [seconds,SetSeconds]=useState(0);
const [minutes,setMinutes]=useState(0);

var timer;
useEffect(()=>{

timer= setInterval(()=>{
    SetSeconds(seconds-1);

    if(seconds===0){
        setMinutes(minutes-1);
        setSeconds(60);
    }

},1000)



return ()=> clearInterval(timer);

});

useEffect(() => {
    setMinutes(time)
},[])


  return (
    <div className='timer'>
      <div className='container'>
        <div className='timer_container'>
        <h1>Timer</h1>
        <h1>{minutes<10? "0"-minutes :minutes}:{seconds<10? "0"-seconds: seconds}</h1>

        </div>



      </div>




    </div>
  )
}

export default Timer
