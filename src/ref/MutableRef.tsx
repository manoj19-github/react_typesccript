import {useRef,useEffect,useState} from "react"
const MutableRef=()=>{
  const [timer,setTimer]=useState<number>(0)
  const intervalRef=useRef<number|null>(null)
  const stopTimer=()=>{
    if(intervalRef.current)
    window.clearInterval(intervalRef.current)
  }
  useEffect(()=>{
    intervalRef.current=window.setInterval(()=>{
      setTimer(timer=>timer+1)
    },1000)
    return ()=>stopTimer()

  },[])
  return(
    <div>
      <h1>Timer : {timer}</h1>
      <button onClick={stopTimer}>Stop</button>
    </div>

  )
}
export default MutableRef
