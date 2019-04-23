import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
library.add(faBars);


class Header extends Component {
    constructor(){
        super()
        this.state = {
           showDropdown: false
        } 
    }

    handleToggle(){
        this.setState({
            showDropdown: !this.state.showDropdown
        })
    }

    render(){
        return (
            <div>
                {!this.state.showDropdown
                ? (<div className='Header'>
                    <Link to='/' className='Webdeveloperlink'><span className='Headername'>Matthew Bodily | Web Developer</span></Link>
                    <div className='Headerlinkbox'>
                        <AnchorLink href='#home' className='Headerlink'>Home</AnchorLink>
                        <AnchorLink offset='50' href='#about' className='Headerlink'>About</AnchorLink>
                        <AnchorLink offset='50' href='#skills' className='Headerlink'>Skills</AnchorLink>
                        <AnchorLink offset='50' href='#projects' className='Headerlink'>Projects</AnchorLink>
                        <AnchorLink offset='50' href='#contact' className='Headerlink'>Contact</AnchorLink>
                        <FontAwesomeIcon icon="bars" className="Bars" onClick={() => this.handleToggle()}/>
                    </div>
                </div>) 
                : (<div>
                    <div className='Header'>
                        <Link to='/' className='Webdeveloperlink'><span className='Headername'>Matthew Bodily | Web Developer</span></Link>
                        <div className='Headerlinkbox'>
                            <AnchorLink href='#home' className='Headerlink'>Home</AnchorLink>
                            <AnchorLink offset='50' href='#about' className='Headerlink'>About</AnchorLink>
                            <AnchorLink offset='50' href='#skills' className='Headerlink'>Skills</AnchorLink>
                            <AnchorLink offset='50' href='#projects' className='Headerlink'>Projects</AnchorLink>
                            <AnchorLink offset='50' href='#contact' className='Headerlink'>Contact</AnchorLink>
                            <FontAwesomeIcon icon="bars" className="Bars" onClick={() => this.handleToggle()}/>
                        </div>
                    </div>
                    <div className='Dropdownmenu'>
                        <AnchorLink href='#home' className='Topdropdownlink'>Home</AnchorLink>
                        <AnchorLink offset='50' href='#about' className='Dropdownlink'>About</AnchorLink>
                        <AnchorLink offset='50' href='#skills' className='Dropdownlink'>Skills</AnchorLink>
                        <AnchorLink offset='50' href='#projects' className='Dropdownlink'>Projects</AnchorLink>
                        <AnchorLink offset='50' href='#contact' className='Dropdownlink'>Contact</AnchorLink>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}

export default Header;