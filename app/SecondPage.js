'use client'

import {  Paper, Stack } from '@mui/material'
import Card from './Card'
import React from 'react'

const SecondPage = () => {
  return (
    <Stack 
    flexDirection='column'
    display='column'
    justifyContent='space-evenly'
    height='100vh'
    
    m={10}
    
    >
        <Stack
        flexDirection='row'
        display='column'
        justifyContent='space-evenly'
        marginBottom={0}
        >
        <h1 >EQ Beats IQ </h1>
        <p>People with high emotional <br></br>intelligence(EQ) live more fulfilled <br></br>lives .they tend to be happier<br></br> have lealthier relationships </p>
        <p>People with high emotional<br></br> intelligence(EQ) live more<br></br> fulfilled lives .they tend to be happier<br></br> have lealthier relationships </p>

        </Stack>
        
        <h1>Does this Sound Familiar... </h1>
        <Stack 
        flexDirection='row'
        display='column'
        // justifyContent='space-evenly'
        // marginBottom={0}
        // textAlign={'left'}

        >
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
        <Card>
        <img src='/logo.ico'></img>
        <h3>My first </h3>
        <p>This is the content of my card.</p>
        </Card>
        

        </Stack>
        

    </Stack>
  )
}

export default SecondPage