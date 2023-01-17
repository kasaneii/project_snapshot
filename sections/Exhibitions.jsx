'use client';

import styles from '../styles';
import { motion } from 'framer-motion';

const Exhibitions = () => (
  <section id='Exhibitions' className={`${styles.yPaddings}`}>
    <div className={`${styles.innerWidth} mx-auto`}>
      <div className='lg:flex items-center gap-32 w-full px-16 lg:px-0'>
        <h2 className={`${styles.heading2} text-center sm:text-left`}>Exhibitions</h2>

        <div className='hidden lg:block w-[363px] h-[50px]'>
          <img src="/grunge-bg.jpg" alt="blue grunge background" className='object-cover w-full h-full rounded-full object-bottom drop-shadow'/>
        </div>
      </div>

      <div className='flex items-center justify-between mt-10 lg:w-[90%]'>
        <p className={`${styles.paragraph} lg:w-[661px] px-16 lg:px-0 text-center lg:text-left lg:ml-56`}>Allegories of the Visible extends the conceptual, theoretical, and critical orientations of “Currency” through a constellation of ideas on the mediatory status of the image and its strategic possibilities for knowledge.</p>

        <a href="#Contact" className='hidden lg:block'>
          <motion.img 
            src="/stamp-2.png" 
            alt="contact now" 
            className='w-[170px] h-[170px] object-contain cursor-pointer'
            whileHover={{ scale: 1.1, x: 0}}
            transition={{ duration: 0.2 }} 
          />
        </a>
      </div>

      <div className='mt-10 lg:mt-16 w-[full] grid grid-cols-1 sm:grid-cols-3 gap-5 px-6 lg:px-0'>
        <div className='w-full h-[375px] sm:h-[778px] sm:row-span-2 border-[7px] border-blue-clr relative'>
          <img src="/exhibition-1-bw.jpg" alt="photography by Hank Stanford" className='hidden lg:block w-full h-full object-cover absolute'/>
          <motion.img src="/exhibition-1.jpg" alt="photography by Hank Stanford" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1' whileHover={{opacity: 1,}} transition={{duration: 0.5}}/>
        </div>
        <div className='w-full h-[375px] border-[7px] border-blue-clr relative'>
          <img src="/exhibition-2-bw.jpg" alt="photography by Hank Stanford" className='hidden lg:block w-full h-full object-cover absolute'/>
          <motion.img src="/exhibition-2.jpg" alt="photography by Hank Stanford" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1' whileHover={{opacity: 1}} transition={{duration: 0.5}}/>
        </div>
        <div className='w-full h-[375px] border-[7px] border-blue-clr relative'>
          <img src="/exhibition-3-bw.jpg" alt="photography by Hank Stanford" className='hidden lg:block w-full h-full object-cover absolute'/>
          <motion.img src="/exhibition-3.jpg" alt="photography by Hank Stanford" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1' whileHover={{opacity: 1}} transition={{duration: 0.5}}/>
        </div>
        <div className='w-full h-[375px] sm:col-span-2 border-[7px] border-blue-clr relative'>
          <img src="/exhibition-4-bw.jpg" alt="photography by Hank Stanford" className='hidden lg:block w-full h-full object-cover absolute'/>
          <motion.img src="/exhibition-4.jpg" alt="photography by Hank Stanford" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1' whileHover={{opacity: 1}} transition={{duration: 0.5}}/>
          <h2 className={`${styles.heading2} text-white absolute right-0 mt-36 mr-4 lg:mt-28 lg:mr-8`}>NYC, <br/>25 June <br/> 2023</h2>
        </div>
        <div className='w-full h-[375px] border-[7px] border-blue-clr relative'>
          <img src="/exhibition-5-bw.jpg" alt="photography by Hank Stanford" className='hidden lg:block w-full h-full object-cover absolute'/>
          <motion.img src="/exhibition-5.jpg" alt="photography by Hank Stanford" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1' whileHover={{opacity: 1}} transition={{duration: 0.5}}/>
        </div>
        <div className='w-full h-[375px] border-[7px] border-blue-clr relative'>
          <img src="/exhibition-6-bw.jpg" alt="photography by Hank Stanford" className='hidden lg:block w-full h-full object-cover absolute'/>
          <motion.img src="/exhibition-6.jpg" alt="photography by Hank Stanford" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1' whileHover={{opacity: 1}} transition={{duration: 0.5}}/>
        </div>
        <div className='w-full h-[375px] border-[7px] border-blue-clr relative'>
          <img src="/exhibition-7-bw.jpg" alt="photography by Hank Stanford" className='hidden lg:block w-full h-full object-cover absolute'/>
          <motion.img src="/exhibition-7.jpg" alt="photography by Hank Stanford" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1' whileHover={{opacity: 1}} transition={{duration: 0.5}}/>
        </div>
      </div>
    </div>
  </section>
)

export default Exhibitions