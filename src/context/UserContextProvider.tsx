import {createContext,useState}  from "react"
export type AuthUser={
  email:string,
  password:string
}
type UserContextType={
  userData:AuthUser|null,
  setUserData:React.Dispatch<React.SetStateAction<AuthUser|null>>
}
type UserContextProviderType={
  children:React.ReactNode
}
export const UserContext=createContext<UserContextType |null>(null)
const UserContextProvider=({children}:UserContextProviderType)=>{
  const [userData,setUserData]=useState<AuthUser|null>(null)

  return(
    <UserContext.Provider value={{userData,setUserData}}>
      {children}
    </UserContext.Provider>
  )

}

export default UserContextProvider
