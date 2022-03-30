import Login from "./Login"
import {ProfileProps} from "./Profile"

type AuthTypes={
  isLoggedIn:boolean,
  component:React.ComponentType<ProfileProps>
}

const Auth=({isLoggedIn,component:Component}:AuthTypes)=>{
  if(isLoggedIn){
    return <Component name="Manoj Santra"/>
  }
  return <Login/>

}
export default Auth
