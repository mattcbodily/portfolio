import React from 'react';
import NonHomeHeader from './../../Header/NonHomeHeader';
import './LongboardShop.css';
import ProjectVideo from './odntshop.mp4';
import Footer from './../../Footer/Footer';

const LongboardShop = () => {
    return (
        <div className='Projectdiv'>
            <NonHomeHeader />
            <div className='Projectcontentdiv'>
                <div>
                    <video className='Projectvideo' controls>
                        <source src={ProjectVideo} type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='Projectoverview'>
                    <h2 className='Projectpagename'>O.D.N.T. Longboards</h2>
                    <p className='Projecttech'>React | Redux | Bootstrap | Stripe | AWS S3</p>
                    <p>Old Dog New Trick longboards is an E-commerce longboard shop designed for Aaron Kahle. 
                    This application is built with a React front-end, and also uses Redux for state management. 
                    O.D.N.T. Longboards is styled using Bootstrap components, and Stripe is utilized to take 
                    customer payments.  The backend is built with Node.js, Express.js and a postgreSQL database.</p>
                    <a href='http://www.odntlongboards.com'><button className='project-links-button'>Live Site</button></a>
                    <a href='https://github.com/mattcbodily/longboard-shop'><button className='project-links-button'>Github Repo</button></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LongboardShop;