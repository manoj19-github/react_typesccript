import Person from "./Person"
const PersonData=[
  {
    name:{
      first:"Manoj",
      last:"Santra"
    },
    marks:83
  },
  {
    name:{
      first:"Ajay",
      last:"Das"
    },
    marks:53
  },
  {
    name:{
      first:"Utpal",
      last:"Paul"
    },
    marks:84
  },
]
const PersonList=()=>{
  return(
    <div>
    {
      PersonData.map((person,index)=>(
        <Person personData={person} key={index}/>
      ))
    }
    </div>
  )
}
export default PersonList
