import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaFacebook} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // jei false bus true, jei true bus false
  const handleClick = () => { setNav(!nav)};

  return (
    <div className='fixed bg-opacity-95 w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300 mb-10 z-40'>
      <div>
        <p className='text-pink-600 text-xl font-bold'>Portfolio</p>
      </div>

      {/* Link- offset={50}*/} 
      {/* menu */}
        <ul className='hidden md:flex'>
          <li className='hover:text-pink-600'> 
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li className='hover:text-pink-600'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li className='hover:text-pink-600'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='hover:text-pink-600'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
      {/* z-index pamazina stack orderi */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>

      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

        <ul>
        {/* Facebook */}
          <li className='w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:scale-125 hover:my-1 hover:-ml-[-5px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Facebook <FaFacebook size={30}/>
            </a>
          </li>

          {/* GitHub */}
          <li className='w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:scale-125 hover:my-2 hover:-ml-[-5px] duration-300 bg-gray-700'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/src/assets/Dovydas_Paulavičius_resume.pdf' target="_blank">
              GitHub <FaGithub size={30}/>
            </a>
          </li>

          {/* Email */}
          <li className='w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:-ml-[10px] duration-300 bg-emerald-700'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Email <HiMail size={30}/>
            </a>
          </li>
          
          {/* Resume */}
          <li className='w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:-ml-[10px] duration-300 bg-red-700'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>

        </ul>

      </div>

    </div>
  )
}

export default Navbar