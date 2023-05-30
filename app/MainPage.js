'use client'

import { Box, Paper } from '@mui/material';
import React, {useEffect, useRef } from 'react'


const MainPage = () => {





  return (

    <div>
    <Paper
    sx={{
        margin:'45px',
        marginTop:'0px',
        height:'85vh',
        width:'95%',
        borderRadius:'4vh',
        background:'#c6abd6'
    }}
    >
        <Box flexDirection='row' display='flex'>
            <Box>    
                    <h3 >Ahead App</h3>
                    <h1>Master your life<br></br> by mastering <br></br> emotions</h1>

                <Box flexDirection='row' display='flex' p={2}  sx={{}}>
                
                    <Paper 
                    component='button'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                    borderRadius:'2vh',
                    width:'180px',
                    height:'55px',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                        Download on the <br></br>
                        <h5>App Store</h5>
                    </Paper>
                
                
                    <Box flexDirection='column' marginLeft={4} >
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                        <p>100+ AppStore reviews</p>
                    </Box>
                </Box>
            </Box>
            <Box flexDirection='row' display='flex'>
                <img src='/leaf.png' ></img>
                <img src='/circle.png'></img>
            </Box>
        </Box>
    </Paper>
    </div>
    
  )
}

export default MainPage;

