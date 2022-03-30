import {UserContext} from "../context/UserContextProvider"
import {useContext} from "react"
const User=()=>{
  const userContext=useContext(UserContext)
  const handleLogin=()=>{
    if(userContext){
      userContext.setUserData({
        email:"santramanoj1997@gmail.com",
        password:"manojsantra"
      })
    }
  }
  const handleLogout=()=>{
    if(userContext){
      userContext.setUserData(null)
    }
  }
  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <p>userEmail : {userContext?.userData?.email}</p>
      <p>password : {userContext?.userData?.password}</p>
    </div>
  )
}
export default User
