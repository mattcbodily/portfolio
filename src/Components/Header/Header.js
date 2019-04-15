import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <span className='Headername'>Matthew Bodily | Web Developer</span>
            <div className='Headerlinkbox'>
                <Link to='/' className='Headerlink'>Home</Link>
                <Link to='/About' className='Headerlink'>About</Link>
                <Link to='/Projects' className='Headerlink'>Projects</Link>
                <Link to='/Contact' className='Headerlink'>Contact</Link>
            </div>
        </div>
    )
}

export default Header;