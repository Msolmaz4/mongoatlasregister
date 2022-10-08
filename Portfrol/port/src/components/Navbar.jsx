import React from 'react'
import { FaBars ,FaTimes} from 'react-icons/fa'
import Logo  from '../ass/logo1.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
<div>
<img src={Logo} alt="" style={{width:'50px'}} />
</div>
{/**menu */}
<div>
    <ul className='flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
    </ul>
</div>
   {/**hanburger */}
   <div className='hidden'>
<FaBars/>

   </div>


   {/**Mobil */}
   <div className='hidden'>
   <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
    </ul>
   </div>


   {/*socilaicon */}
   <div className='hidden'>

   </div>
    </div>
  )
}

export default Navbar