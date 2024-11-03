import React, {useState, useEffect, useRef} from 'react'

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const interValid = useRef(null)
    const startTime = useRef(0)

    useEffect(() => {
        
    },[isRunning])

    function stop(){

    }
    function start(){

    }
    function reset(){

    }
    function formatTime(){
      return `00:00:00`
    }
  return (
    <div className='stopwatch'>
      <div className='display'>{formatTime()}</div>
      <div className='controls'>
        <button onClick={start} className='start-button'>Start</button>
        <button onClick={stop} className='stop-button'>Stop</button>
        <button onClick={reset} className='reset-button'>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch