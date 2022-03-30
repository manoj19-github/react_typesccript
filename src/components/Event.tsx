
type EventProps={
  handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void,
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
  name:string
}
const Event=(props:EventProps)=>{
  return(
    <>
      <button onClick={(e)=>props.handleClick(e,4)}>Click Me</button>
      <input type="text" onChange={(e)=>props.handleChange(e)} value={props.name}/>
    </>
  )



}

export default Event
