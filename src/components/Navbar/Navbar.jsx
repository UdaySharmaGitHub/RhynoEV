import {Link, NavLink} from 'react-router-dom'
import {useState} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import lightThemeLogo from "../../assets/lightThemeLogo.png"
import darkThemeLogo from "../../assets/darkThemeLogo.png"
import { MdLightMode } from "react-icons/md";  // light icon
import { GiNightSleep } from "react-icons/gi";  // dark icon
// Hamberger Menu Icon
import { HiMenu} from "react-icons/hi"; // Close menu
import { IoCloseSharp } from "react-icons/io5";
import { ResponsivMenu } from './ResponsivMenu';
// Framer Motion
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
    aosdelay:"300",
  },
  {
    id: 2,
    name: "PRE-BOOK NOW",
    link: "/prebooknow",
    aosdelay:"400",
  },
  {
    id: 3,
    name: "PRODUCTS",
    link: "/products",
    aosdelay:"500",
  },
  {
    id: 4,
    name: "ABOUT US",
    link: "/about",
    aosdelay:"600",
  },
  {
    id: 5,
    name: "CONTACT US",
    link: "/contact-us",
    aosdelay:"700",
  },
  {
    id: 6,
    name: "RENTAL",
    link: "/rental",
    aosdelay:"800",
  },
];

export const Navbar = ({theme ,setTheme}) => {
  // To Show the Responsive Menu
  const [showMenu,setShowMenu] = useState(false);
  
  // Toggle Menu
  const toggleMenu = ()=> setShowMenu(!showMenu);
  
  return (
    <nav className='shadow-lg shodow-primarydark-200 bg-primarywhite-400 text-primarydark-300 dark:bg-primarydark-300 dark:text-primarywhite-100 py-2 duration-300 relative x-10'>
      <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1, delay: 0.5 }}
      className="container">
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div 
          data-aos="fade-down" data-aos-duration="800" data-aos-once="false">
            <Link to="/"  >
            <img 
            className='h-14'   
            src={theme ==="dark"?darkThemeLogo:lightThemeLogo} alt="" />
            </Link>
          </div>
          {/* Link Menu */}
          <div className='hidden lg:block'>
            <ul className='flex justify-center items-center gap-4'>
              {Navlinks.map((data)=>(
                <li 
                key={data.id}
                data-aos="fade-down"
                data-aos-delay={data.aosdelay}
                className='py-3'>
                  <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                  <NavLink 
                  className='font-medium text-md hover:border-b-primarydark-300 duration-200 hover:border-b-4 dark:hover:border-y-primaryyellow-200'
                  to={data.link}>{data.name}</NavLink>
                </UpdateFollower>
                </li>
              ))}
            </ul>
          </div>
          {/* theme Switch and Menus */}
              <div className='flex gap-3 justify-center items-center'>
            <div 
            data-aos="fade-down"
            data-aos-duration="1500"
            className='duration-200 border-primarydarkgray-500 dark:border-primarywhite-400 rounded-full p-1 border-s border-4'>
              {
                theme==='dark'?(
                  <MdLightMode
                  onClick={()=>{setTheme('light')}}
                  className="text-4xl dark:text-primaryyellow-200"
                  />):(
                  <GiNightSleep
                  onClick={()=>{setTheme('dark')}}
                  className="text-4xl"/>)
              }
            </div>
            {/* Mobil Humberger Menu */}
            <div
            data-aos="fade-down"
            data-aos-duration="1700"
            className='block lg:hidden duration-200'>
            {
              showMenu?(
                <IoCloseSharp 
                size={40}
                className='cursor-pointer transition-all'
                onClick={toggleMenu}/>
              ):(
                <HiMenu 
                size={40}
                className='cursor-pointer transition-all'
                onClick={toggleMenu}
                />)
            }
            </div>
          </div>
        </div>
      </motion.div>
      <ResponsivMenu showMenu ={showMenu} setShowMenu={setShowMenu} theme = {theme} />
    </nav>
  )
}
