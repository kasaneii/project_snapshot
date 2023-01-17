'use client';

import {Footer, Navbar} from '../components';
import {About, Exhibitions, Gallery, Hero} from '../sections';
import { useEffect } from "react";

const Page = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dark-blue w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <Exhibitions/>
      <Footer/>
    </div>
  )
}

export default Page;