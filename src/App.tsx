import React,{useState,useContext} from 'react';
import Greet from "./components/Greet"
import PersonList from "./components/PersonList"
import Title from "./components/Title"
import Event from "./components/Event"
import MyReducer from "./components/MyReducer"
import ThemeProvider from "./context/ThemeProvider"
import {ThemeContext} from "./context/ThemeProvider"
import {UserContext} from "./context/UserContextProvider"
import UserContextProvider from "./context/UserContextProvider"
import User from "./components/User"
import InputRef from "./ref/InputRef"
import MutableRef from "./ref/MutableRef"
import {Counter} from "./classComponents/Counter"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Login from "./components/Login"
function App() {
  const [name,setName]=useState<string>("name")
  const handleNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value)
  }
  const handleClick=(e:React.MouseEvent<HTMLButtonElement>,id:number)=>{
    console.log("button clicked : ",id)
  }
  const theme=useContext(ThemeContext)
  const userContext=useContext(UserContext)
  return (
    <UserContextProvider>
      <ThemeProvider>
        <div className="App" style={{
          "background":theme.primary.main,
          "color":theme.primary.text
        }}>
          <Greet name="manoj" message={34}/>
          <PersonList/>
          <Title><h1>Manoj Santra Title</h1></Title>
          <Event handleClick={handleClick} handleChange={handleNameChange} name={name}/>
          <MyReducer/>
          <User/>
          <InputRef/>
          <MutableRef/>
          <Counter message="manoj santra"/>
          <Auth isLoggedIn={true} component={Profile}/>
        </div>

    </ThemeProvider>
  </UserContextProvider>
  );
}

export default App;
