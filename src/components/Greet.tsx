type GreetProps={
  name:string,
  message:number
}
const Greet=(props:GreetProps)=>{
    return(
      <h1>
        {props.name} are send to you {props.message}
      </h1>
    )
}
export default Greet
