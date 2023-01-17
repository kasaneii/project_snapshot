'use client';

import styles from '../styles';
import { motion } from 'framer-motion';

const About = () => {

  return (
    <section id='About' className={`${styles.yPaddings}`}>
      <div className={`${styles.innerWidth} mx-auto px-16 lg:px-0`}>
        <h1 className={`${styles.heading2} lg:pt-32 text-center sm:text-left`}>About <br/>Hank Stanford</h1>

        <div className='flex flex-col sm:flex-row'>

          {/* stamp no.2 and Hank Stanford photo */}
          <div className='mt-12 lg:mt-20 w-[649px] h-[438px] lg:h-[538px] relative'>

            <a href="#Contact" className='hidden lg:block'>
              <motion.img 
                src="/stamp-2.png" 
                alt="contact now" 
                className='w-[170px] h-[170px] object-contain absolute bottom-10 cursor-pointer' 
                whileHover={{ scale: 1.1, x: 0}}
                transition={{ duration: 0.2 }}
                />
            </a>

            <div className='w-[300px] h-[430px] lg:w-[400px] lg:h-[516px] lg:ml-56 relative'>
              <div className='hidden lg:block absolute bottom-0 w-[246px] h-[372px] bg-blue-clr'/>
              <img src="/about-bw.jpg" alt="photo of Hank Stanford" className='hidden lg:block absolute bottom-0 ml-5 mb-5 w-[379px] h-[516px] object-cover'/>
              <motion.img src="/about.jpg" alt="photo of Hank Stanford" className='lg:ml-5 lg:mb-5 lg:bottom-0 w-[279px] sm:w-[290px] lg:w-[379px] h-[416px] lg:h-[516px] object-cover absolute lg:opacity-0 opacity-1 drop-shadow'
              whileHover={{opacity: 1}}
              transition={{duration: 0.5}}
              />
            </div>
          </div>

          {/* grunge bg and paragraphs */}
          <div className='sm:flex items-center lg:block sm:mt-10 lg:mt-20'>
            <div className='hidden lg:block mt-16 w-[218px] h-[50px]'>
              <img src="/grunge-bg.jpg" alt="blue grunge background" className='object-cover w-full h-full rounded-full object-top drop-shadow'/>
            </div>

            <div className='text-center lg:ml-24 w-[280px] sm:w-[350px] lg:w-[525px]'>
              <p className={`${styles.paragraph} mt-4 lg:mt-16 `}>Photographer and curator based in Los Angeles, California. Being sensitive to the small details of the everyday, my work revolves around floating moments and allegorical moments and allegorical scenes. Nature, memory, and family are nations that interest me in a symbolic form and their narrative power.</p>
              <p className={`${styles.paragraph} mt-4 lg:mt-8 `}>Moreover, my humanist approach and idealization of women set me apart from the other photographers, as my privileges, the soul and the personality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About