import React, { Component } from 'react';
import NonHomeHeader from './../Header/NonHomeHeader';
import './About.css';

class About extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
        return (
            <div className='About'>
                <NonHomeHeader />
                <div className='Aboutpageflexdiv1'>
                    <div className='Aboutinfodivs'>
                        <p className='Aboutmequestions'>Why Coding/Web Development?</p>
                        <div className='Questionanswers'>
                            There are a lot of things to like about coding, but I especially love the problem solving involved with it.  Web 
                            Development provides the opportunity for daily growth and learning.  I get a lot of satisfaction from being able to 
                            find solutions to problems in code, and am always striving to grow my skills so that I can be the best developer that 
                            I can be.  To go along with all of this, I enjoy programming on a team.  The team environment in Web Development is very 
                            unique, and highly fulfilling.
                        </div>
                    </div>
                    <div className='Picturedivs'>
                        <div className='Portfoliopicture'/>
                    </div>
                </div>
                <div className='Aboutpageflexdiv2'>
                    <div className='Picturedivs'>
                        <div className='Familypicture'/>
                    </div>
                    <div className='Aboutinfodivs'>
                        <p className='Aboutmequestions'>What do I like to do outside of code?</p>
                        <div className='Questionanswers'>
                            Outside of code, I enjoy spending time with my family.  My wife, daughter, dog, and I love to go visit the National 
                            Parks(We are up to 15 visited so far!), and have a goal to visit all the parks in our lifetime.  Music is also a hobby of mine.  During my time at Utah Valley University, I was a member 
                            of the Green Man Group Drumline, as well as being the drum captain for the Utah Jazz drumline. I am avid sports fan, and 
                            love to cheer on the Utah Jazz and Philadelphia Eagles.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;