'use client'

import { Paper, Stack, Card } from '@mui/material';
import { gsap } from 'gsap';

import React, { useEffect, useRef } from 'react';

const SecondPage = () => {
    const cardsRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    const cards = cardsRef.current;
    const heading = headingRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.set(cards, { opacity: 0, x: 0 });
          gsap.set(heading, { opacity: 0, x: -100 });

          gsap.fromTo(
            cards,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 2.5, stagger: 0.2, ease: 'power3.out' }
          );

          gsap.fromTo(
            heading,
            { scale: 1.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.8, ease: 'power3.out' }
         );
                
        }
      });
    }, observerOptions);

    if (heading && cards) {
      observer.observe(heading);
    }
    

  }, []);
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
        <span style={{fontWeight:'bold' , fontSize:'40px'}} >EQ Beats IQ </span>
        <span  style={{color:'grey', fontSize:'20px' }}>People with high emotional <br></br>intelligence(EQ) live more fulfilled <br></br>lives .they tend to be happier<br></br> have lealthier relationships </span>
        <span style={{color:'grey', fontSize:'20px' }}>People with high emotional<br></br> intelligence(EQ) live more<br></br> fulfilled lives .they tend to be happier<br></br> have lealthier relationships </span>

        </Stack>
        
        <span
         ref={headingRef} style={{ opacity: 0, transform: 'scale(1.2)' , fontSize:'55px' , fontWeight:'bold' ,marginLeft:'10%'}}>Does this sound familiar... </span>
        <Stack 
        flexDirection='row' display='column' ref={cardsRef}
        // justifyContent='space-evenly'
        // marginBottom={0}
        // textAlign={'left'}

        >
        
        <Card  
            
            sx={{
                marginLeft:'3%',
                
                borderRadius:'2vh',
                height:'200px',
                width:'40em',
                p:'1%'

            }}
            style={{background: 'aliceblue'}} 
       >

        <img src='/SecondPage/pic1.png' height={60} ></img>
        <br></br>
        <span style={{fontWeight:'bold' , fontSize:'18px'}}>You attend a class reunion </span><br></br>
        <span style={{fontSize:'14px' , color:'grey'}}>You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.
</span>
        </Card>
        <Card
        sx={{
                marginLeft:'3%',
                
                borderRadius:'2vh',
                height:'200px',
                width:'40em',
                p:'1%'

            }}
            style={{background: 'antiquewhite'}} 
        >
        <img src='/SecondPage/pic2.png' height={60} ></img>
    <br></br>    <span style={{fontWeight:'bold' , fontSize:'18px'}}>You are at a lively dinner party</span>
    <br></br>    <span style={{fontSize:'14px' , color:'grey'}}>You play on your phone, instead of confidently approaching strangers and striking up a chat.</span>
        </Card>
        <Card
        sx={{
                marginLeft:'3%',
                
                borderRadius:'2vh',
                height:'200px',
                width:'40em',
                p:'1%'

            }}
            style={{background: 'lightpink'}} 
        >
        <img src='/SecondPage/pic3.png' height={60}></img>
    <br></br>    <span style={{fontWeight:'bold' , fontSize:'18px'}}>You hit dead end in a negotiation </span>
    <br></br>    <span style={{fontSize:'14px' , color:'grey'}}>You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.</span>
        </Card>
        <Card
        sx={{
                marginLeft:'3%',
                marginRight:'3%',
                borderRadius:'2vh',
                height:'200px',
                width:'40em',
                p:'1%'

            }}
            style={{background: 'floralwhite'}} 
        >
        <img src='/SecondPage/pic4.png' height={60}></img>
    <br></br>    <span style={{fontWeight:'bold' , fontSize:'18px'}}>You get a promotion at work </span>
    <br></br>    <span style={{fontSize:'14px' , color:'grey'}}>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</span>
        </Card>
        

        </Stack>
        

    </Stack>
  )
}

export default SecondPage