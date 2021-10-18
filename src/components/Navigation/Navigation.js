import React from 'react';
import './Navigation.css';


const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
          <nav >
            <p
              onClick={() => onRouteChange('signout')}
              className='link dim pointer washed-blue button'
            >
              Sign Out
            </p>
          </nav>
        );
        } else {
            return (
                    <nav >
                        <p onClick={() => onRouteChange('signin')} className='link dim  pointer washed-blue button'>
                            Sign In
                        </p>
                        <p onClick={() => onRouteChange('register')} className='link dim  pointer washed-blue button'>
                            Register
                        </p>
                    </nav>

            );

        }

}

export default Navigation;