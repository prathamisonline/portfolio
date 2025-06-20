import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center items-baseline gap-8 w-full text-white'>
        <h2 className='flex-1 uppercase text-6xl font-bold'>Hi! I'm <span className='text-[#EA580C] font-bold'>Pratham</span>,<br/>
        I love making things that help people do their thing.</h2>
        <div className='flex-1'>
            <div>I’m a senior frontend engineer based in India, specializing in building pixel-perfect, engaging, and accessible digital experiences.</div>
            <div>As a passionate engineer and also a total nerd, I enjoy building software in the sweet spot where design, problem-solving, and engineering meet — creating things that not only look good but are also easy to use and well-built under the hood. <span>About Me More</span></div>
        </div>
    </div>
  )
}

export default About