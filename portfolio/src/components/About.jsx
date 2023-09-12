import React from 'react'
import Avatar from '../assets/avatar.jpg';

const About = () => {
  return (
    <div name='about' className=' w-full h-fit bg-[#08192f] text-gray-300 py-20 '>
      <div className=' flex flex-col justify-center items-center w-full h-full'>
        <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>  



          <div className=' pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>

          </div>

    </div>




          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  '>

          <div className='sm:text-right text-2xl font-bold '>
            <p className=''> 
              Highly-motivated Multimedia Design graduate at Vilnius Tech with
              passion for programming and working in professional teams. I
              enjoy solving complex problems as well as deepening my creative
              and design skills. I am currently actively seeking for a job
              opportunity in the multimedia design or programming fields.
            </p>
          </div> 
          
          <div className='flex justify-center items-center pb-30 pt-16 sm:pt-0'>
          <div className='relative z-0 ml-0 before:absolute before:-top-10 before:-left-10 before:rounded-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-pink-600 before:z-[-1]'>
           <img className='h-28 w-28 mx-auto rounded-[400px]' src={Avatar} alt="HTML"/>
           </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About