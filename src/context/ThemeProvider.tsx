import {createContext} from "react"
import {theme} from "./theme"
export const ThemeContext=createContext(theme)
type ThemeContextType={
  children:React.ReactNode
}
const ThemeProvider=({children}:ThemeContextType)=>{
  return(
    <ThemeContext.Provider value={theme}>
      {children}

    </ThemeContext.Provider>

  )
}
export default ThemeProvider
