import React , {useState}  from 'react'
import "./navbar.css"
import "./navbar.scss"
import { MdTravelExplore } from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai" 
import {TbGridDots} from "react-icons/tb"


const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const shohNav = ()=>{
    setActive('navBar activeNavBar')
  }
  
  const removeaNavBar = ()=>{
    setActive('navBar ')
  }
  return (
 <section className="navBarSection">
   <header className="header flex ">


    <div className="logoDiv">
      <a href="#!" className='logo' >
        <h1> <MdTravelExplore className ="icon" /> Travel</h1>
      </a>
    </div>

    <div className={active}>
      <ul className="navLists flex">

        <li className='navItem' >
          <a href="#!" className='navLink' >Home</a>
        </li>

        <li className='navItem' >
          <a href="#!" className='navLink' >Packages</a>
        </li>

        <li className='navItem' >
          <a href="#!" className='navLink' >Shop</a>
        </li>

        <li className='navItem' >
          <a href="#!" className='navLink' >About</a>
        </li>

        <li className='navItem' >
          <a href="#!" className='navLink' >Pages</a>
        </li>

        <li className='navItem' >
          <a href="#!" className='navLink' >News</a>
        </li>

        <li className='navItem' >
          <a href="#!" className='navLink' >Contacts</a>
        </li>

       <button className="btn  ">
        <a href="#!"> Book Now </a>
       </button>
      </ul>
      <div onClick={removeaNavBar} className="closeNavBar">
      <AiFillCloseCircle className="icon" />
      </div>
      
    </div>
   
    <div onClick={shohNav}  className="toggleNavBar">
      <TbGridDots className ="icon" />
    </div>
   </header>
 </section>
  )
}

export default Navbar
