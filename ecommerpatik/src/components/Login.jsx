import React from 'react'
import {motion} from 'framer-motion'

const Login = () => {
  return (
    <div className='log'>
      <div className='recht'>
     
      <motion.div animate={{ 
        rotate:[0,200,200,0],
        x:[0,200,200,0,-200,-200,0]
      }}
       transition={{repeat:Infinity,duration:1}}
      >
      <div className='der'></div>
      </motion.div>
      </div>
      <div className='link'>link</div>
      
     


    </div>
  )
}

export default Login