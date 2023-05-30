'use client'

import { Box, Paper } from '@mui/material';
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';

const MainPage = () => {
  const headingRef = useRef();
  const contentRef = useRef();


  useEffect(() => {
    const heading = headingRef.current;
    const content = contentRef.current;
  

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.set(content, { opacity: 0, x: -50 });
          gsap.set(heading, { opacity: 0, x: -50 });

          gsap.fromTo(
            heading,
            { x: '-50%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
          );

          gsap.fromTo(
            content,
            { x: '-50%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
          );
        
          observer.unobserve(entry.target);
          
        }
      });
    }, observerOptions);

  
      observer.observe(heading);
      observer.observe(content);


  },[]);
  

  return (

    <div>
    <Paper
    
        sx={{
          margin: '45px',
          marginTop: '0px',
          height: '85vh',
          width: '95%',
          borderRadius: '4vh',
          background: '#c6abd6',
          transition: 'background-color 0.3s',
          backgroundColor:'#f2e4f5', 
        }}
    >
        <Box flexDirection='row' display='flex'>
            <Box 
            flex={6}
            m={20}
            sx={{}}
            >    
                    <p ref={headingRef}  style={{opacity: 0, transform: 'scale(1.2)',fontWeight:'bold'}}>Ahead App</p><br></br>
                    <p ref={contentRef} style={{opacity: 0, transform: 'scale(1.2)',fontWeight:'bold' , fontSize:'60px'}}>Master your life<br></br> by mastering <br></br> emotions</p>

                <Box flexDirection='row' display='flex' justifyContent={'left'} alignItems={'center'} p={2}  sx={{}}>
                
                    <Paper 
                    component='button'
                    sx={{
                        // p:'2px',
                        // m:'4px',
                        alignItems:'left',
                        justifyContent:'left',
                        alignContent:'left',
                    borderRadius:'1vh',
                    width:'180px',
                    height:'55px',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                      <AppleIcon Size/>
                     <span style={{fontSize:'10px'}}>Download on the</span> <br></br>
                        <span>App Store</span>
                        
                    </Paper>
                
                
                    <Box flexDirection='column' marginLeft={4} >
                        <p >⭐️⭐️⭐️⭐️⭐️</p>
                        <p>100+ AppStore reviews</p>
                    </Box>
                </Box>
            </Box>
            <Box flexDirection='row' display='flex' flex={6} >
                {/* <img src='/leaf.png' ></img> */}
                <img src='/mainPage/Phone.png' height={'80%'} width={'100%'}></img>
            </Box>
        </Box>
    </Paper>
    </div>
    
  )
}

export default MainPage;

