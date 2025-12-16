"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FaPhone,
    faEnvelope,
    faUser,
    faBars,
    faTimes,
} from 
"@fortawesome/free-solid-svg-icons";
import  {faFacebook , faFlicker} from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { useState, useEffect } from "react";


export default function Nav() {
    const [isOpen , setIsOpen] = useState(false);
    const [isScrolled , setIsScrolled] = useState(false);

    useEffect (()=>{
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 80)  
        };
        window.addEventListener("scroll" , handleScroll);
        return() =>window.removeEventListener("scroll" , handleScroll);
    },[]);

  return (
   <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
   

    ${isScrolled? "shadow-md bg-white py-3 scrolled" : "py-0"}
   `}>
{/* NavTop */}
 <div></div>
   </nav>
  )
}
