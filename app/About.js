'use client'

import { Box, Paper } from '@mui/material';
import React, {useEffect, useRef } from 'react'


const About = () => {





  return (

    <div>
    <Paper
    sx={{
        margin:'45px',
        marginTop:'0px',
        height:'85vh',
        width:'95%',
        borderRadius:'4vh',
        background:'#f0e4bb'
    }}
    >
        <Box
         flexDirection='row' 
         display='flex' 
         alignItems='center'
         justifyContent='center'
          >
            <Box flex={6} p={20} m={3}>     
                    <h3 >Built out of frustration</h3>
                    <h1>Meet the ahead app</h1>

    
                    <Box flexDirection='column' marginLeft={4} >
                        <img src='/logo.ico' height={330} width={330}></img>
                    </Box>
                
            </Box>
            <Box flexDirection='column' display='flex' flex={6} p={10}>
                <p> A personalized pocket coach that provides bite-<br></br> sized, science-driven tools to boost emotional<br></br> inteliigence.</p>
                <p>Think of it as a pocket cheerleader towards a<br></br> better, more fulfilling.</p>
            </Box>
        </Box>
    </Paper>
    </div>
    
  )
}

export default About;

