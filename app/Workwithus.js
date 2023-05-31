'use client'

import { Box, Paper } from '@mui/material';
import React, {useEffect, useRef } from 'react'


const Workwithus = () => {





  return (

    <div>
    <Paper
    sx={{
        margin:'45px',
        marginTop:'0px',
        height:'85vh',
        width:'95%',
        borderRadius:'4vh',
        background:'#F3F1FF'
    }}
    >
        <Box flexDirection='row' display='flex' >
            <Box flexDirection='column' display='flex' flex={6}>    
            <span style={{fontSize:'3em' , fontWeight:'bold' , margin:'10%' , marginTop:'15%'}}>Work with us </span>
                <Box flexDirection='column' display='flex' p={2}  sx={{}}>
                
                    <Paper 
                    component='card'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                    borderRadius:'2vh',
                    width:'30em',
                    height:'20em',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                        Download on the <br></br>
                        <h5>App Store</h5>
                    </Paper>
                    <Paper 
                    component='card'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                        borderTopLeftRadius:'0px',
                        overflowY:'-10px',
                    borderRadius:'2vh',
                    width:'30em',
                    height:'10em',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                        Download on the <br></br>
                        <h5>App Store</h5>
                    </Paper>
                

                </Box>
            </Box>
            <Box flexDirection='column' display='flex' flex={6}>
            <span style={{fontSize:'5em' , fontWeight:'bold' , margin:'10%' , marginTop:'15%'}}>ahead </span>
                <Box flexDirection='column' display='flex' p={2}  sx={{}}>
                
                    <Paper 
                    component='card'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                    borderRadius:'2vh',
                    width:'30em',
                    height:'20em',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                        Download on the <br></br>
                        <h5>App Store</h5>
                    </Paper>
                    <Paper 
                    component='card'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                        borderTopLeftRadius:'0px',
                        overflowY:'-10px',
                    borderRadius:'2vh',
                    width:'30em',
                    height:'10em',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                        Download on the <br></br>
                        <h5>App Store</h5>
                    </Paper>
                

                </Box>
            </Box>
        </Box>
    </Paper>
    </div>
    
  )
}

export default Workwithus;

