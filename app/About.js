'use client'
import { Box, Paper } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const text4Ref = useRef();
  const imageRef = useRef();

  useEffect(() => {
  
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    const text3 = text3Ref.current;
    const text4 = text4Ref.current;
    const image = imageRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            text1,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
          );
          gsap.fromTo(
            text2,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
          );

          gsap.fromTo(
            text3,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
          );

          gsap.fromTo(
            text4,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
          );


          gsap.fromTo(
            image,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.3 }
          );

          
        }
      });
    }, observerOptions);

    observer.observe(text1);
    observer.observe(text2);
    observer.observe(text3);
    observer.observe(text4);
    observer.observe(image);


    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Paper
        sx={{
          margin: '45px',
          marginTop: '0px',
          height: '85vh',
          width: '95%',
          borderRadius: '4vh',
          background: '#f0e4bb',
        }}
      >
        <Box flexDirection='row' display='flex' alignItems='center' justifyContent='center'>
          <Box flex={7} p={6} m={2} marginTop={7}>
            <span ref={text1Ref} style={{ fontSize: '20px' }}>
              Built out of frustration
            </span>
            <br />
            <span ref={text2Ref} style={{ fontWeight: 'bold', fontSize: '55px' }}>
              Meet the ahead app
            </span>

            <Box flexDirection='column' marginLeft={4}>
              <img
                ref={imageRef}
                src='/logo.ico'
                height={330}
                width={330}
                alt="Logo"
                style={{ transform: 'scale(0)', opacity: 0 }}
              ></img>
            </Box>
          </Box>
          <Box flexDirection='column' display='flex' flex={5} p={18} marginTop={20} marginRight={10}>
            <span ref={text3Ref}style={{ fontSize: '22px', color: 'grey' }}>
              A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
            </span>
            <br />
            <span ref={text4Ref} style={{ fontSize: '22px', color: 'grey' }}>
              Think of it as a pocket cheerleader towards a better, more fulfilling life.
            </span>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default About;
