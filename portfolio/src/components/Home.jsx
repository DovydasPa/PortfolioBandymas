import React, { Suspense } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";


const Home = () => {
  return (
    <div name='home' className='px-10 py-20  w-full h-fit bg-[#08192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  '>

        <p className='text-slate-50 pb-4'>
          Hi, my name is
        </p>
        {/* sm: everything above small */}
        <div className=' w-full grid sm:grid-cols-3 gap-8'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-slate-50 col-span-2'>
          Dovy<span className='text-pink-600'>das</span>
        </h1> 

        <div className='hidden md:flex row-span-2'>
        <div className=''>
        <Canvas >
              <Suspense fallback={null}>

              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />

              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1,100,200]} scale={2.5}>
              <MeshDistortMaterial color="#220736" attach='material' distort={0.5} speed={2}/>
              </Sphere>              
              
            </Suspense>
        </Canvas>
        </div>
        </div> 


        <h2 className='text-4xl sm:text-7xl sm:font-bold text-slate-50 col-span-2'>
        <span className='text-pink-600'>Paul</span>avičius 
        </h2>

        </div>

        <p className='text-slate-300 py-4 max-w-[700px] text-2xl'>
        Multimedia Design graduate at Vilnius Tech.
        </p>

        <div>
        <Link to='work' smooth={true} duration={500}> 
          <button className='text-white group border-2 px-6 py-3 my-2 absolute flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
          </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Home