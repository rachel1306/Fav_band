import React,{ useState } from 'react';
import './Navbar.css'
import { NavHashLink as Link } from 'react-router-hash-link';
import { FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
function Navbar() {
    //state={ clicked:false }  <i className={this.state.clicked?'fas fa-times':'fas fa-bars'}></i>
    const [clicked,setClicked]=useState(false);
    let menu,menuMask;
    if(clicked){
        menu=<div className='fixed bg-aqua h-full'> <FaTimes className='close'/> </div>
        menuMask=<div onClick={() => setClicked(false)}></div>
    }
    else{
        menu=<div> <FaBars /> </div>
    }
    return (
        <div className='pos'>Navbar
        </div>
    )
}

export default Navbar