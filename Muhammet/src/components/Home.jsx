import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
     
        {/** Contanier */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
     
      <div className='flex justify-end'>
      <button className='text-white w-32 bg-[#0a192f] transition delay-700 duration-300 ease-in-out rounded-full hover:bg-pink-600 hover:border-pink-600' >Deutsch</button>
      </div>
       
        <p className='text-pink-600'>
       
          Hi ,my name</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Muhammet Solmaz</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am  a Full Stack Develepor</h2>
        <p  className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur consequuntur pariatur officia officiis sunt cum laudantium architecto numquam ex tempore odit, eos aperiam vel omnis commodi nam labore. Harum inventore nostrum eos numquam tempora quae adipisci veritatis quisquam quis. Eligendi mollitia voluptate nulla exercitationem.</p>
        
        <button  className='text-white w-48  group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> View Work
        <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
         </button>
        </div>
      
        </div>
  )
}

export default Home