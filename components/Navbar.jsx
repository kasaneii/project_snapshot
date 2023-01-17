'use client';

import { useState, useEffect } from 'react';
import { navLinks, socialLinks } from '../constants';
import { motion } from 'framer-motion';
import styles from '../styles';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.xPaddings} py-4 lg:py-8 bg-darker-blue fixed top-0 left-0 right-0 z-20`}>
      <div className={`${styles.innerWidth} mx-auto flex lg:justify-between relative`}>
        <a href="#Home">
          <img src="/snapshot.png" alt="logo" className='w-[188px] h-[45px] object-contain'/>
        </a>
        
        <ul className="list-none lg:flex hidden items-center">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.id} 
              className={`font-outfit font-medium cursor-pointer text-[20px] 
              ${active === link.id ? "text-white" : "text-font-clr"} 
              ${index === navLinks.length-1 ? "mr-0" : "mr-[70px]"}`} 
              onClick={() => setActive(link.title)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img src="/menu.png" alt="menu" className='w-[36px] h-[36px] object-contain' onClick={() => setToggle(!toggle)}/>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-blue-clr absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((link, index) => (
                <li 
                  key={link.id} 
                  className={`font-outfit font-medium cursor-pointer text-[16px] 
                  ${active === link.id ? "text-white" : "text-font-clr"} 
                  ${index === navLinks.length-1 ? "mb-0" : "mb-8"}`} 
                  onClick={() => setActive(link.title)}
                  >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

          </div>

        </div>

        <div className='hidden lg:block w-[100px]'/>

        <motion.div className='w-[104px] h-[329px] absolute right-0 hidden lg:block'
        animate={{ opacity: isScrolling ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        >
          <div className='w-full h-[240px] bg-blue-clr flex flex-col items-center gap-10 pt-10'>
              {socialLinks.map((link)=> (
              <a key={link.id} href={link.url} target="_blank">
                <img key={link.id} src={link.imgUrl} alt={link.id} className='w-[20px] h-[20px] object-contain'/>
              </a>
              ))}

            <div className='w-[31px] h-[119px] bg-orange-clr absolute bottom-0'/>
            <div className='font-bold text-[14px] rotate-90 w-[84px] absolute bottom-12'>FOLLOW ME</div>
          </div>
        </motion.div> 

      </div>


    </nav>
  )
}

export default Navbar