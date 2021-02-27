import React from 'react';
import Particles from 'react-particles-js'; 
   
function ParticlesJS() { 
  return ( 
    <div className="ParticlesJS"> 
      <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1500, 
              } 
            }, 
          }, 
        }} 
      /> 
    </div> 
  ); 
} 
   
export default ParticlesJS;