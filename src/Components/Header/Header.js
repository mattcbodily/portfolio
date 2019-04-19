import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/' className='Webdeveloperlink'><span className='Headername'>Matthew Bodily | Web Developer</span></Link>
            <div className='Headerlinkbox'>
                <AnchorLink href='#home' className='Headerlink'>Home</AnchorLink>
                <AnchorLink offset='50' href='#about' className='Headerlink'>About</AnchorLink>
                <AnchorLink offset='50' href='#skills' className='Headerlink'>Skills</AnchorLink>
                <AnchorLink offset='50' href='#projects' className='Headerlink'>Projects</AnchorLink>
                <AnchorLink offset='50' href='#contact' className='Headerlink'>Contact</AnchorLink>
            </div>
        </div>
    )
}

export default Header;