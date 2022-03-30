import {useReducer} from  "react"
type TCounter={
  counter:number
}
type UAction={
  type:"increment"|"decrement",
  payload:number
}
type RAction={
  type:"reset"
}
const MyReducer=()=>{
  const initState={
    counter:0
  }
  const reducer=(state:TCounter,action:UAction|RAction)=>{
    switch(action.type){
      case "increment":
        return {counter:state.counter+action.payload}
      case "decrement":
        return {counter:state.counter-action.payload}
      case "reset":
        return {counter:0}
      default:
        return state
    }
  }
  const [state,dispatch]=useReducer(reducer,initState)
  return(
    <div>
      <h4>Counter : {state.counter}</h4>
      <button onClick={()=>dispatch({type:"increment",payload:10})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement",payload:10})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}
export default MyReducer
