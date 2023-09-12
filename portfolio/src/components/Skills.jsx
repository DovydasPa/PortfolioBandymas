import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Three from '../assets/three.png';

const Skills = () => {
  return (
    // kazkas cia su ekranu blogai kai resizini
    <div name='skills' className='w-full h-fit bg-[#08192f] text-gray-300 py-20'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
          <p className='py-4'>These are technoligies i worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML"/>
            <p className='my-4'> HTML </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML"/>
            <p className='my-4'> CSS </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="HTML"/>
            <p className='my-4'> JAVASCRIPT </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML"/>
            <p className='my-4'> REACT </p>
          </div>



          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Three} alt="HTML"/>
            <p className='my-4'> THREE JS </p>
          </div>



          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="HTML"/>
            <p className='my-4'> TAILWIND </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills