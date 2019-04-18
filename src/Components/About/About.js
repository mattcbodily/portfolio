import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='About'>
            <div className='Aboutpageflexdiv'>
                <div className='Aboutinfodivs'>
                    <p className='Aboutmequestions'>Why Coding/Web Development?</p>
                    <div className='Questionanswers'>

                    </div>
                </div>
                <div className='Portfoliopicture'/>
            </div>
            <div className='Aboutpageflexdiv'>
                <div className='Familypicture'/>
                <div className='Aboutinfodivs'>
                    <p className='Aboutmequestions'>What do I like to do outside of code?</p>
                    <div className='Questionanswers'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;