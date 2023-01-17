'use client';

import styles from '../styles';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <section id='Home' className="pt-24 sm:pt-32 pb-6 sm:pb-16 lg:pt-48 lg:pb-0 bg-darker-blue relative">
      <div className={`${styles.innerWidth} mx-auto flex justify-center lg:justify-start flex-col sm:flex-row`}>

        <div className='mx-auto lg:mx-0 min-w-[300px] lg:min-w-[400px] min-h-[448px] lg:min-h-[548px] relative'>
          <div className='hidden lg:block bg-blue-clr min-w-[305px] min-h-[327px] absolute'/>
          <img src="/hero-img-bw.jpg" alt="a man taking a photo in black and white" className='hidden lg:block absolute mt-5 ml-5 min-w-[364px] min-h-[548px] object-cover'/>
          <motion.img 
          src="/hero-img.jpg" 
          alt="a man taking a photo with colors" 
          className='min-w-[264px] lg:min-w-[364px] min-h-[448px] lg:min-h-[548px] mt-5 sm:ml-5 object-cover rounded-t-full sm:rounded-none absolute lg:opacity-0 opacity-1 drop-shadow'
          whileHover={{opacity: 1}}
          transition={{duration: 0.5}}/>
        </div>

        <div className='px-16 lg:px-0 relative'>

          <div className='flex flex-col lg:flex-row lg:w-auto lg:h-[50px] lg:gap-12'>
            <div className='hidden lg:block w-[250px] h-[50px] ml-16'>
              <img src="/grunge-bg.jpg" alt="blue grunge background" className='object-cover w-full h-full rounded-full drop-shadow'/>
            </div>
            <p className='pt-12 lg:pt-0 text-center sm:text-left font-medium text-[20px] text-orange-clr'>#1 Photo Of The Year Winner</p>
          </div>

          <div className='text-center sm:text-left lg:text-left lg:ml-32 mt-5 lg:mt-14'>
            <h1 className={`${styles.heroHeading}`}>Photography <br className="sm:block hidden"/>helps people <br className="sm:block hidden"/>to see</h1>
          </div>

          <div className='pt-5 text-center lg:pt-0 sm:text-left lg:ml-96'>
            <p className={`${styles.paragraph}`}>From inspiring people’s stories to impactful <br className="sm:block hidden"/>messages, I create head-turning photograph <br className="sm:block hidden"/>that does the right thing, in the right place, <br className="sm:block hidden"/>at the right time to unlock the possibility.</p>
            
            <button className='my-5 lg:hidden font-medium text-[16px] text-black py-2 px-6 bg-orange-clr rounded-[8px] cursor-pointer'>
              <a href="#Contact">Let's Talk</a>
            </button>
          </div>


          <div className='hidden lg:block w-[685px] h-[330px] ml-40 mt-14 absolute'>
            <img src="/food-1.jpg" alt="pancake" className='w-[213px] h-[262px] object-cover border-[5px] border-darkest-blue rotate-[-10deg] absolute drop-shadow'/>
            <img src="/food-2.jpg" alt="blueberry pancakes" className='w-[196px] h-[299px] object-cover border-[5px] border-darkest-blue rotate-[10deg] absolute ml-32 drop-shadow'/>

            <a href="#Contact">
              <motion.div className='relative'
                whileHover={{ scale: 1.2, x: -50, y: -25,}}
                transition={{ duration: 0.5 }}
              >
                <motion.img src="/stamp.png" alt="contact now" className='w-[170px] h-[170px] object-contain absolute right-0 border-[5px] border-darker-blue rounded-full cursor-pointer drop-shadow'
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                />
                <img src="left-arrow-black.png" alt="arrow" className='w-[48px] h-[48px] object-contain absolute right-14 mt-14 rotate-[130deg]'/>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero