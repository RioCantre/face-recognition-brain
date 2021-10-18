import React from 'react';
import Tilt from 'react-tilt';
import glasses from './sun_glasses.png';
import './Logo.css';

const Logo = () => {
    return (
      <div className='ma5'>
        <Tilt
          className='Tilt br2 shadow-2'
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}>
          <div className='Tilt-inner pa3'>
              <img style={{ paddingTop: '2px' }} alt='logo' src={glasses} /> 
          </div>
        </Tilt>
      </div>
    );
}

export default Logo;