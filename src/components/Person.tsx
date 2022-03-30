import {FunctionComponent} from "react"
type TPerson={
  personData:{
    name:{
      first:string,
      last:string
    },
    marks:number

  }

}
const Person=(props:TPerson)=>{

  return(
    <div>
      <h1>{props.personData.name.first} {props.personData.name.last}</h1>
      <p>{props.personData.marks}</p>
    </div>
  )
}
export default Person
