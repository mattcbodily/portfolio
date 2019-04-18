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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;