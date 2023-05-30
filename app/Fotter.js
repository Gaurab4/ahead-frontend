'use client'

import { Divider, Paper, Stack } from '@mui/material';
import React from 'react'
import Card from './Card';


const Fotter = () => {
  return (
    <Stack>
      <h1>Open vacancies</h1>
      <Stack 
      flexDirection='row' 
      display='flex'
       justifyContent='space-evenly'
      //  alignItems='center'
      //  justifyItems='center'
      marginLeft={8}
      marginRight={8}
      height='50vh'
      >
        <Card>
        <img src='/logo.ico'></img>
        <h3>My first </h3>
        <ul>
        <li> Full-time position</li>
        <li>Berlin or remote</li>
        <li>this one </li>
        </ul>
      
        </Card>
        <Card>
        <img src='/logo.ico'></img>
        <h3>My first </h3>
        <p>This is the content of my card.</p>
        </Card>
        <Card>
        <img src='/logo.ico'></img>
        <h3>My first </h3>
        <p>This is the content of my card.</p>
        </Card>
      </Stack>
      <Divider>center</Divider>
      <Stack flexDirection='column'  alignItems='center'>
      <img src='/logo.ico'></img>
      <p >ahead</p>
      <Stack flexDirection='row' display='flex'>
        <p>
          <p>logo</p>
          <p>AuguststraBe 26,10117 Berlin </p>
        </p>
        <p>
          <p>logo</p>
          <p>hi@ahead-app.com</p>
        </p>
      </Stack>
      </Stack>
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
      <p>@ 2022 Ahead app. All right reserve</p>

    </Stack>
  )
}

export default Fotter;