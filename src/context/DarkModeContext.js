
import React ,{useState,createContext,useEffect} from 'react';

//style
import "../App.css"
export const themContext=createContext()


 const DarkModeContext = ({children}) => {
    // state for dark mode.
  const [DarkMode, setDarkMode] = useState("light");
useEffect(() => {
  // dark mode styles to the body when DarkMode state changes
  document.body.className = DarkMode;
}, [DarkMode]);
  const toggleThem =()=>{
    setDarkMode(
      DarkMode==="light"?"dark":"light"
      
      )
  }



  return (
     <themContext.Provider value={{DarkMode,toggleThem}}>
       {children}
       </themContext.Provider>
  )

  }
  
export default DarkModeContext