import React from 'react';
import { motion } from 'framer-motion';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import SideBar from './SideBar';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <SideBar />
        <div className='wrapper'>
            <motion.span
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}>
                Luna Smith
            </motion.span>
            <div className="social">
                <a  href="//www.instagram.com/lunasmithart/"
                    target="_blank"
                    rel="noreferrer" 
                    aria-label="Instagram page">
                     <FaInstagram />
                </a>
                <a href="//www.facebook.com/artlunasmith"
                    target="_blank"
                    rel="noreferrer" 
                    aria-label="Facebook page">
                    <FaFacebook />
                </a>
                <a  href="//twitter.com/LunaSmithArt"
                    target="_blank"
                    aria-label="Twitter page"
                    rel="noreferrer">
                    <FaTwitter />
                </a>
                <a  href="//www.linkedin.com/in/luna-smith/"
                    rel="noreferrer" 
                    aria-label="YouTube page">
                    <FaYoutube />
                </a>
                <a  href="//www.linkedin.com/in/luna-smith/"
                    rel="noreferrer" 
                    aria-label="LinkendIn page">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    </div>
  )
}

export default NavBar