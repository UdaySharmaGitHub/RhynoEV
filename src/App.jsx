import './App.css'
import AOS from 'aos'
import { useState,useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
// update Follower
import { UpdateFollower } from "react-mouse-follower";

function App() {
  // Dark Mode Functionalities
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')?localStorage.getItem('theme'):"light"
  )

  const element = document.documentElement;
  useEffect(() => {
    if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem('theme','dark');
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem('theme','light');
    }
  }, [theme])

  // AOS initialized
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <>
   <UpdateFollower
   mouseOptions={{
          backgroundColor:`${theme==='dark'?`white`:'#000'}`,
          zIndex: 10,
          followSpeed: 1.3,
        }}
   >
   <div className='bg-primarywhite-100 text-primarydark-300 dark:bg-primarydark-300 dark:text-primarywhite-100 overflow-x-hidden'>
    <Navbar theme={theme} setTheme = {setTheme}/>
    <section style={{scrollBehavior:'smooth'}}>
        <Outlet/>
      </section>
      <Footer/>
    </div>
   </UpdateFollower>
    </>
  )
}

export default App
