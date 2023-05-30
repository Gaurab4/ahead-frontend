'use client'

import { Stack, Paper } from '@mui/material';
import React from 'react'

const Test = () => {
  return (
    <Stack 
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    sx={{height:'100vh'}}
    // alignContent='center'
     >
        <span style={{fontSize:'18px'}}>We take privacy seriously</span>
        <span style={{fontWeight:'bold' , fontSize:'30px'}}>Before you get started</span>
      <br></br>  <span style={{fontWeight:'bold' , fontSize:'20px'}}>"We won't share your answers anyone(and won't even tell</span>
        <span style={{fontWeight:'bold' , fontSize:'20px'}}>you which friends said what about you )"</span>
        <span style={{fontSize:'15px'}}> with love,Team ahead</span><br></br>  
        {/* <img src='/logo.ico'></img> */}
        <Paper 
                    component='button'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                    borderRadius:'20vh',
                    width:'150px',
                    height:'50px',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                        Start a test
                    </Paper><br></br>

                    <span style={{fontSize:'15px'}}> Take only 5 minutes</span>
    </Stack>
  )
}

export default Test;