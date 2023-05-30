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
        <p>We take privacy seriously</p>
        <p sx={{ }}>Before you get started</p>
        <p>"We won't share your answers anyone(and won't even tell</p>
        <p>you which friends said what about you )"</p>
        <p> with love,</p>  
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
                    </Paper>

                    <p> Take only 5 minutes</p>
    </Stack>
  )
}

export default Test;