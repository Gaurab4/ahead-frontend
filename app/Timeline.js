'use client'

import { Box, Chip, Divider, Paper  , Stack} from '@mui/material';
import React, {useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import SunanimationData from './../public/lottiefiles/sun .json';
import LineanimationData from './../public/lottiefiles/line.json';


const Timeline = () => {

  const text2Ref = useRef();
  const text3Ref = useRef();
  const text4Ref = useRef();

      useEffect(() => {
    const text2 = text2Ref.current;
    const text3 = text3Ref.current;
    const text4 = text4Ref.current;


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
          
          gsap.fromTo(
            text3,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.9, ease: 'bounce' }
          );

          gsap.fromTo(
            text4,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.9, ease: 'bounce' }
          );
          
        }
      });
    }, observerOptions);


    observer.observe(text2);
    observer.observe(text3);
    observer.observe(text4);
    


    return () => {
      observer.disconnect();
    };
  }, []);



  return (

    <div>
    <Paper
    sx={{
        margin:'45px',
        marginTop:'0px',
        height:'85vh',
        width:'95%',
        borderRadius:'4vh',
        background:'#b4e4ed'
    }}
    >
        <Box
         flexDirection='column' 
         display='flex' 
         alignItems='center'
         justifyContent='center'
         p={3}
          >
          <Box flexDirection='column' display='flex' alignItems='center' >
                <span style={{fontSize:'20px', }}>Let your friends , family, and co-worker(anonymously ) rate your social skills. </span>
                <span style={{fontWeight:'bold' , fontSize:'60px'}}>Ever wonder what others think of you?</span>
            </Box>
          
            <Box 
            //  animation here
            flexDirection='row'
             display='flex' 
            justifyContent='space-evenly'
            justifyItems='center'
             >   
             <Stack
             flexDirection='column'
             display='flex'
            marginRight={20}
             >
            <Lottie animationData={SunanimationData} style={{height:'200px' , width:'300px' }} />
                    <span ref={text2Ref}style={{fontSize:'14px' ,fontWeight:'600',margin: '10px', marginTop:'0' , paddingTop:'0'}}>Answer questions on your social skills</span>
             </Stack>
             <Stack
             flexDirection='column'
             display='flex'
             marginRight={20}
             >
              <Lottie animationData={SunanimationData} style={{height:'200px' , width:'200px' }} />    
              <span ref={text3Ref}style={{fontSize:'14px',fontWeight:'600' ,margin: '10px'}}>Let others anonymously answer the <br></br>same questions about you</span>
                
             </Stack>
             <Stack
             flexDirection='column'
             display='flex'
             >
              <Lottie animationData={SunanimationData} style={{height:'200px' , width:'200px' }} />    
              <span ref={text4Ref}style={{fontSize:'14px' ,fontWeight:'600',margin: '10px'}}>Find out where you and others see things <br></br>the same way - and where not!</span>

  
             </Stack>

               
                    
                    
                
            </Box>
            <Box marginTop={10} >
<Paper elevation={0} sx={{ height: '230px', width: '45em', alignContent: 'center', display: 'flex',borderRadius:'2vh', flexDirection: 'column', overflow: 'visible' }}>
  <Stack flexDirection='row' display='flex' marginTop={2} marginLeft={2} justifyContent='flex-start' alignItems='center'  alignContent='center'>
    <Paper elevation={0} sx={{ height: '50px',borderRadius:'2vh', width: '15%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center',display:'flex' ,flexDirection:'column', marginTop: '5px',  }} style={{ background: '#6441EF' }}>
      <span style={{color:'white' , fontSize: '18px', textAlign: 'center', marginTop: '2%' }}>You</span>      
    </Paper>
    <Paper elevation={0} sx={{ height: '50px', textAlign: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '2vh', width: '25%', marginLeft: '25%' }} style={{ background: '#FDB438', marginTop: '5px' }}>
  <span style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>Anonymonos 2</span>
</Paper>
  </Stack>
  <div style={{ width: '3px', height: '30%', backgroundColor: 'black', margin: '0px', alignSelf: 'center', transform: 'rotate(90deg)' }}></div>
  <Stack flexDirection='row' display='flex' justifyContent='flex-start'>
  <Paper elevation={0} sx={{ height: '50px', borderRadius: '2vh', width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: '5%' }} style={{ background: '#40C1FC', marginBottom: '5px' }}>
  <span style={{ color: 'white', fontSize: '18px' }}>Anonymonos 1</span>
</Paper>

<Paper elevation={0} sx={{ height: '50px', justifyContent: 'center', alignItems: 'center', borderRadius: '2vh', width: '25%', textAlign: 'center', marginLeft: '40%' }} style={{ background: '#56C896', marginBottom: '5px' }}>
  <span style={{ fontSize: '18px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>Anonymonos 3</span>
</Paper>

  </Stack>
</Paper>





            </Box>
            
            
        </Box>
    </Paper>
    </div>
    
  )
}

export default Timeline;

