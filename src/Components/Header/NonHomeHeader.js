import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const NonHomeHeader = () => {
    return (
        <div className='Header'>
            <Link to='/' className='Webdeveloperlink'><span className='Headername'>Matthew Bodily | Web Developer</span></Link>
            <div className='Nonhomeheaderlinkbox'>
                <Link to='/' className='Nonhomeheaderlink'>Back Home</Link>
            </div>
        </div>
    )
}

export default NonHomeHeader;