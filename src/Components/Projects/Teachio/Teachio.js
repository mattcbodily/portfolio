import React from 'react';
import NonHomeHeader from './../../Header/NonHomeHeader';
import './Teachio.css';
import ProjectVideo from './Teachio.mp4';
import Footer from './../../Footer/Footer';

const Teachio = () => {
    return (
        <div className='Projectdiv'>
            <NonHomeHeader />
            <div className='Projectcontentdiv'>
                <div>
                    <video className='Projectvideo' controls>
                        <source  src={ProjectVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='Projectoverview'>
                    <p className='Projectpagename'>Teachio</p>
                    <p className='Projecttech'>React | Redux | Socket.io | AWS S3 | React Dropzone</p>
                    <p>Teachio is an online platform that allows students to find tutors. Users are able to find tutors 
                    based on subject, and can view tutor profiles and request lessons. Teachio utilizes AWS S3, as well 
                    as React Dropzone, to allow users to upload profile pictures. Socket.io is used within Teachio to allow 
                    real time messaging between students and tutors.</p>
                    <a href='https://www.teachio.co'><button className='project-links-button'>Live Site</button></a>
                        <a href='https://github.com/mattcbodily/tutorlab'><button className='project-links-button'>Github Repo</button></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Teachio;