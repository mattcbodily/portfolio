import React from 'react';
import './Teachio.css';
import ProjectVideo from './Teachio.mp4';

const Teachio = () => {
    return (
        <div className='Projectdiv'>
        <div>
            <video className='Projectvideo' src={ProjectVideo} type="video/mp4" controls>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className='Projectoverview'>
            <p className='Projectpagename'>Teachio</p>
            <p className='Projecttech'>React | Redux | Socket.io | AWS S3 | React Dropzone</p>
            Teachio is an online platform that allows students to find tutors. Users are able to find tutors 
            based on subject, and can view tutor profiles and request lessons. Teachio utilizes AWS S3, as well 
            as React Dropzone, to allow users to upload profile pictures. Socket.io is used within Teachio to allow 
            real time messaging between students and tutors.
        </div>
    </div>
    )
}

export default Teachio;