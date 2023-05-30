'use client'

import { Box, Paper } from '@mui/material';
import React, {useEffect, useRef } from 'react'


const Timeline = () => {





  return (

    <div>
    <Paper
    sx={{
        margin:'45px',
        marginTop:'0px',
        height:'85vh',
        width:'95%',
        borderRadius:'4vh',
        background:'#b4e4ed'
    }}
    >
        <Box
         flexDirection='column' 
         display='flex' 
         alignItems='center'
         justifyContent='center'
         p={3}
          >
          <Box flexDirection='column' display='flex' alignItems='center' >
                <p >Let your friends , family, and co-worker(anonymously ) rate your social skills. </p>
                <h1>Ever wonder what others think of you?</h1>
            </Box>
            <Box 
            
            m={3} 
            flexDirection='row'
             display='flex' 
            

             >     
                    <h3  >Built out of frustration</h3>
                    <h1>Meet the ahead app</h1>

    
                    
                
            </Box>
            <Paper sx={{height:'230 ' ,width:'330'}} background='white'>  </Paper>
            
        </Box>
    </Paper>
    </div>
    
  )
}

export default Timeline;

