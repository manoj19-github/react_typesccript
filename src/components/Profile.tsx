export type ProfileProps={
  name:string
}
const Profile=({name}:ProfileProps)=>{
  return(
    <div>
      <p>this is My Profile</p>
      <p>Hello {name}</p>
    </div>
  )
}
export default Profile
