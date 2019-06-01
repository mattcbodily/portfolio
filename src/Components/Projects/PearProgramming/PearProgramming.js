import React, { Component } from 'react';
import NonHomeHeader from './../../Header/NonHomeHeader';
import './PearProgramming.css';
import ProjectVideo from './PearProgramming.mp4';
import Footer from './../../Footer/Footer';

class PearProgramming extends Component {
    render(){
        return (
            <div className='Projectdiv'>
                <NonHomeHeader />
                <div className='Projectcontentdiv'>
                    <div>
                        <video className='Projectvideo' controls>
                            <source src={ProjectVideo} type='video/mp4'/>
                        </video>
                    </div>
                    <div className='Projectoverview'>
                        <p className='Projectpagename'>PearProgramming</p>
                        <p className='Projecttech'>React | Monaco | Socket.io | AWS S3 | Sass</p>
                        <p>Pear Programming is an online, collaborative code editor. Utilizing Monaco's code editor, 
                        together with Socket.io, users are able to write and edit code together in real time. 
                        PearProgramming is styled using Sass, and it also utilizes particles.js for added styling on select pages. 
                        PearProgramming also uses AWS S3, paired with React Dropzone, to allow users the ability to 
                        upload and store profile pictures.</p>
                        <a href='https://www.pearprogramming.co'><button className='project-links-button'>Live Site</button></a>
                        <a href='https://github.com/sudorm-rfdot/pearprogramming'><button className='project-links-button'>Github Repo</button></a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PearProgramming;