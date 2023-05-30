import React from 'react'

import { Button, Paper, Stack, Typography, colors } from '@mui/material';
import Link from "next/link";

const Header = () => {
  return (
    <Stack
    direction= 'row'
    alignItems='center'
    p={2}
    sx={{position:'sticky' ,background:'white' , top:0 , justifyContent:'space-between'}}
    >
    <Link href="/" style={{display:'flex' , alignItems:'center' }}>
    <img src="/logo.ico" alt='image' height={55}  width={55} style={{ marginLeft: '7em' , borderRadius:'20%' }}/>
    </Link>

    <Stack direction="row" alignItems="center"  sx={{ position: 'sticky', background: 'white', top: 0, justifyContent: 'space-between' , marginLeft:'100px'  }}>
    <Typography sx={{ m: 4 }}>
      Emotions
    </Typography>

    <Typography sx={{ m: 4 }}>
      Manifesto
    </Typography>

    <Typography sx={{ m: 4 }}>
      Self-awareness test
    </Typography>

    <Typography sx={{ m: 4 }}>
      Work With Us
    </Typography>
  </Stack>
    

    <Paper 
    component='button'
    sx={{
      borderRadius:'20vh',
      width:'160px',
      height:'50px',
      background:'black',
      color:'white',
      boxShadow:'none',
      marginRight:'7%'

    }}

    >
        Download app
    </Paper>

     
  </Stack>
  )
}

export default Header;