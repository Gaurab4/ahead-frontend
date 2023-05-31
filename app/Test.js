'use client'

import { Stack, Paper } from '@mui/material';

import React, {useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const Test = () => {
    const text2Ref = useRef();
    
    useEffect(() => {
    const text2 = text2Ref.current;
    

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            text2,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.9, ease: 'bounce' }
          );
          
        
          
        }
      });
    }, observerOptions);


    observer.observe(text2);
  


    return () => {
      observer.disconnect();
    };
  }, []);






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
        ref={text2Ref}
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