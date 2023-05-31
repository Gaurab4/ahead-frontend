'use client'
import { Stack ,Box, Paper} from '@mui/material';
import { gsap } from 'gsap';
import React,{useRef , useEffect} from 'react'
import CircleIcon from '@mui/icons-material/Circle';


const categories = [
  {title:'Its not as easy as 1-2-3.' , subtitle: 'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).'},
  {title:'Old habits are hard to break.' ,subtitle:'And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.'},
  {title:'You and your motivation dont have a long term relationship.' , subtitle:'Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.'},
  {title:'Books just dont offer practical'  , subtitle:'Remember when you learned to ride a bike just by reading? Yeah, we dont either.We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.'},
  {title: 'Inspiration is great, but then what.' , subtitle:'We make sure your energy from all the content you consume does not fizzle out.'},


];


const SelfImpr = () => {


    const text3Ref = useRef();
    const text4Ref = useRef();

      useEffect(() => {

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

  
    observer.observe(text3);
    observer.observe(text4);
    


    return () => {
      observer.disconnect();
    };
  }, []);


  

  return (
    <Stack flexDirection='column' display='flex' height='150vh' >
        <Stack flexDirection='column' m={10} marginLeft={15}  >
        <span ref={text3Ref}style={{fontSize:'20px'}}>Wrong with self-imporvement & how we're fixing it.</span>
        <span  ref={text4Ref}style={{fontSize:'60px' , fontWeight:'bold'} }>Self-improvement. Ugh.</span>
        </Stack>
        <Box flexDirection='column' display='flex' alignItems={'center'} p={2} sx={{ overflow: 'auto', maxHeight: '40em' }}>
            <Stack
              direction={"row"}
              overflowY={'auto'}
              flexDirection={'column'}
              height={'auto'}
              sx={{ flexDirection: { md: 'column' } }}
              alignContent={'center'}
              // margin={2}
            >
              {categories.map((category) => (
                <Paper
                  sx={{
                      height:'8em',
                      
                    marginRight:'35%',
                    marginLeft:'25%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: '0',
                    borderRadius: '2vh',
                    background: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    marginBottom: '1em',
                  }}
                >
                  <span style={{ color: '#6441EF' , fontWeight:'600', fontSize:'25px',marginBottom:'2px' }}> <CircleIcon fontSize='small'/> {category.title}</span>
                  <br></br>
                  <span style={{ opacity: 1, color: 'black ' , fontSize:'18px'  }}>{category.subtitle}</span>
                </Paper>
              ))}
            </Stack>
        </Box>




        <Stack
        marginTop={30}
        flexDirection='row'
        display='column'
        justifyContent='space-evenly'
        marginBottom={0}
        >
        <span style={{fontWeight:'bold' , fontSize:'40px'}} >EQ Beats IQ </span>
        <span  style={{color:'grey', fontSize:'20px' }}>People with high emotional <br></br>intelligence(EQ) live more fulfilled <br></br>lives .they tend to be happier<br></br> have lealthier relationships </span>
        <span style={{color:'grey', fontSize:'20px' }}>People with high emotional<br></br> intelligence(EQ) live more<br></br> fulfilled lives .they tend to be happier<br></br> have lealthier relationships </span>

        </Stack>
    </Stack>
  )
}

export default SelfImpr;