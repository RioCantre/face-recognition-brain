import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        if(isSignedIn) {
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa4 pointer'>
                    Sign Out
                </p>
            </nav>
        } else {

        }
    )
}

export default Navigation;