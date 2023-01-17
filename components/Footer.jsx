'use client';

import styles from '../styles';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer id='Contact' className={`${styles.yPaddings}`}>
    <div className={`${styles.innerWidth} mx-auto px-16 lg:px-0 border-t-[5px] border-blue-clr`}>
      <div className='flex flex-col sm:flex-row items-center gap-5 mt-16 w-full'>
        <h2 className={`${styles.heading2}`}>HankStanford@snapshot.com</h2>
        <a href="mailto:HankStanford@snapshot.com">
          <motion.img 
            src="/footer-arrow.png" 
            alt="arrow" 
            className='w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain cursor-pointer'
            whileHover={{ x: 10, y: -10,}}
            transition={{ duration: 0.5 }}
            />
        </a>
      </div>

      <ul className='list-none flex flex-col sm:flex-row gap-5 lg:gap-20 mt-12 sm:mt-8 text-center sm:text-left'>
        {navLinks.map((link) => (
          <motion.li 
            key={link.id} 
            className={`font-outfit font-medium cursor-pointer text-[14px] sm:text-[16px] lg:text-[20px] text-font-clr`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </motion.li>
        ))}
      </ul>
    </div>
  </footer>
)

export default Footer