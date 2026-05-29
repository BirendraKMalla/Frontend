import { useEffect, useState } from "react"
import {BiSolidMoon} from "react-icons/bi"
import {BiSolidSun} from "react-icons/bi"


const Darkmode = () => {
    const [theme,setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "Light"
    );
    useEffect(()=>{
        const elements = document.documentElement;
        if(theme === "dark"){
            elements.classList.add("dark");
            localStorage.setItem("theme", "dark")
        }
        else{
            elements.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    },[theme])
  return (
    <>
        {theme === "dark"?(
            <BiSolidSun onClick={()=> setTheme("light")}/>
        ):(
            <BiSolidMoon onClick={()=> setTheme("dark")}/>
        )}
    </>
  )
}

export default Darkmode