import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-8 w-full text-white max-w-6xl mx-auto px-4 py-16'>
      <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight flex-1'>
        <span className='block'>HI! I'M</span>
        <span className='text-[#EA580C]'>PRATHAM,</span>
        <span className='block'>I LOVE MAKING THINGS</span>
        <span className='block'>THAT HELP PEOPLE</span>
        <span className='block'>DO THEIR THING.</span>
      </h2>
      
      <div className='flex-1 space-y-6 max-w-xl'>
        <p className='text-gray-300 text-lg'>
          I'm a senior frontend engineer based in India, specializing in building pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <p className='text-gray-300 text-lg'>
          As a passionate engineer and also a total nerd, I enjoy building software in the sweet spot where design, problem-solving, and engineering meet — creating things that not only look good but are also easy to use and well-built under the hood.
        </p>
        <Link 
          href="/about" 
          className='group inline-flex items-center text-[#EA580C] hover:text-orange-400 transition-colors mt-8 text-lg font-medium'
        >
          MORE ABOUT ME
          <FiArrowUpRight className='ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
        </Link>
      </div>
    </div>
  );
};

export default About;