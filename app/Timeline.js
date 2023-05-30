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
                <span style={{fontSize:'20px', }}>Let your friends , family, and co-worker(anonymously ) rate your social skills. </span>
                <span style={{fontWeight:'bold' , fontSize:'60px'}}>Ever wonder what others think of you?</span>
            </Box>
            <Box 
          
            flexDirection='row'
             display='flex' 
            
        justifyContent='space-evenly'
        justifyItems='center'
             >     
                    <span style={{fontSize:'14px' ,margin: '20px',  padding: '5%'}}>Answer questions on your social skills</span>
                    <span style={{fontSize:'14px' ,margin: '20px',  padding: '5%'}}>Let others anonymously answer the same questions about you</span>
                    <span style={{fontSize:'14px' ,margin: '20px',  padding: '5%'}}>Find out where you and others see things the same way - and where not!</span>

    
                    
                
            </Box>
            <Paper sx={{height:'230 ' ,width:'330'}} background='white'>  </Paper>
            
        </Box>
    </Paper>
    </div>
    
  )
}

export default Timeline;

