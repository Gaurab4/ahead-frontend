import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

const Card = ({title, children }) => {
  return (
    <Paper
        sx={{height:'230px' , width:'350px' ,borderRadius:'2vh' ,p:'2%' ,m:'10px' }}
        
        
        
    >
    
    
      <div className="card-content">{children}</div>
     
    </Paper>
    
  );
};

Card.propTypes = {
    ImgSrc:PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
