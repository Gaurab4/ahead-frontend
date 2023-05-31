'use client'

import { Box, Paper , Stack , Card} from '@mui/material';
import React, {useEffect, useRef } from 'react'
import { gsap } from 'gsap';
// Data for the Cards
const categories = [
    {title:'Power through, even when the going gets tough' , subtitle: 'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.'},
    {title:'Learn more about who you are and where you want to go' ,subtitle:'We ask the right questions to help you better understand why you do things the way you do.'},
    {title:'Play and grow together with others on the same journey' , subtitle:'Ahead feels like a game, not like a chore ,See yourself grow every day towards achieving your goals!'},
    {title:'Master how to make it happen in real life'  , subtitle:'We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards.'},
    {title: 'Learn about practical skills that you can actually use in real life' , subtitle:'We teach you smart psychological techniques and habit-forming strategies that are easy to apply.'},
    {title:'Get support thats made for your needs',subtitle:'We build your personal roadmap of lessons and actions towards your goals.' }

];




const Workwithus = () => {

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
              { x: '150%', opacity: 0 },
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
        margin:'45px',
        marginTop:'0px',
        height:'95vh',
        width:'95%',
        borderRadius:'4vh',
        background:'#F3F1FF'
    }}
    >
        <Box flexDirection='row' display='flex' >
            <Box flexDirection='column' display='flex' flex={6}>    
            <span ref={headingRef} style={{fontSize:'3em' , fontWeight:'bold' , margin:'10%' , marginTop:'15%'}}>Work with us </span>
                <Box flexDirection='column' display='flex' p={2}  sx={{marginLeft:'10%'}}>
                
                    <Paper 
                    component='card'
                    sx={{
                        p:'10px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                    borderRadius:'2vh',
                    width:'30em',
                    height:'20em',
                    background:'white',
                    color:'black',
                    boxShadow:'none',
                    marginTop:'0px',
                    paddingTop:'8%',
                    paddingLeft:'8%',
                    //   marginRight:'7%'
                    }}

                    >
                    <img src='/logo.ico'></img><br></br>
                        <span style={{fontWeight:'bold' , fontSize:'25px' , margin:'2px'}}>About</span> <br></br>
                        <span style={{fontSize:'18px'}}>At ahead our goal is to make self-<br></br>
improvement fun and lasting. We know there's  <br></br>a way how to make it work. And that's what <br></br>aHead is all about!</span>
                    </Paper>
                    <Paper 
                    component='card'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                        borderTopLeftRadius:'0px',
                        overflowY:'-10px',
                    borderRadius:'2vh',
                    width:'30em',
                    height:'10em',
                    background:'#FEF7F0',
                    color:'black',
                    boxShadow:'none',
                    paddingTop:'3%',
                    paddingLeft:'8%',
                    //   marginRight:'7%'
                    }}

                    >
                        <span style={{fontWeight:'bold' , fontSize:'25px' , margin:'2px'}}>Product </span><br></br>
                        <span>Sure, you could spend ages reading books or <br></br> sitting in seminars on how to become a better<br></br> spouse, parent, or manager - like we did...</span>
                    </Paper>
                

                </Box>
            </Box>
            <Box flexDirection='column' display='flex' flex={6}>
  <span ref={contentRef} style={{ fontSize: '4em', fontWeight: 'bold', margin: '10%', marginTop: '12%',color:'#6441EF', marginRight: '0%', marginLeft: '70%' }}>ahead </span>
  <Box flexDirection='column' display='flex' p={2} sx={{ overflow: 'auto', maxHeight: '40em' }}>
  <Stack
    direction={"row"}
    overflowY={'auto'}
    flexDirection={'column'}
    height={'auto'}
    sx={{ flexDirection: { md: 'column' } }}
  >
    {categories.map((category) => (
      <Paper
        sx={{
            height:'15em',
            width:'24em',
          p: '5%',
        
          m: '4%',
           marginLeft:'40%',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '0',
          borderRadius: '2vh',
          background: 'white',
          color: 'black',
          boxShadow: 'none',
        }}
      >
        <span style={{ color: 'black' , fontWeight:'bold' }}>{category.title}</span><br></br>
        <br></br><span style={{ opacity: 1, color: 'black ' , fontSize:'15px'  }}>{category.subtitle}</span>
      </Paper>
    ))}
  </Stack>
</Box>

</Box>

        </Box>
    </Paper>
    </div>
    
  )
}

export default Workwithus;

