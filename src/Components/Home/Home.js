import React from 'react';
import {Link} from 'react-router-dom';
import portfolioPicture from './Pictures/Linkedinpicture.png';
import javascript from './Pictures/javascript3.png';
import react from './Pictures/react2.png';
import redux from './Pictures/redux.png';
import html from './Pictures/html5.png';
import css from './Pictures/css3.png';
import node from './Pictures/nodejs.png';
import postgres from './Pictures/postgres.png';
import sockets from './Pictures/socketio.png';
import sass from './Pictures/sass.png';
import express from './Pictures/expressjslogo.png';
// import teachio from './Pictures/TeachioHome.png';
// import pearprogramming from './Pictures/PearProgramming.png';
import phone from './Pictures/phoneicon.png';
import gmail from './Pictures/gmailicon.png';
import linkedin from './Pictures/linkedin.png';
import github from './Pictures/githubicon.png';
import twitter from './Pictures/Twittericon.png';
import facebook from './Pictures/facebookicon.png';
import './Home.css';

const Home = () => {
        return(
            <div className='Home'>
                <div className='Hometopdiv'>
                    <p className='Homename'>Matthew Bodily</p>
                    <p className='Homeprompt'>Full Stack Web Developer</p>
                </div>
                <div className='Homeaboutdiv'>
                    <p className='Homeaboutprompt'>About Me</p>
                    <div className='Homeaboutflexbox'>
                        <div className='Aboutmeparagraph'>
                            I am a former student going into web development.  I am detail oriented, hard working, and driven to succeed. 
                            I love the problem solving and daily learning that is involved in the web devlopment profession, and love an 
                            environment where I can work with a team. Outside of code, I love watching sports, playing the drums visiting 
                            the National Parks, and spending time with my family.
                            <div className='Moreaboutmebuttondiv'>
                                <Link to='/About'><button className='Moreaboutmebutton'>More About Me</button></Link>
                            </div>
                        </div>
                        <div>
                            <img src={portfolioPicture} alt='About Me' className='Homepicture'/>
                        </div>
                    </div>
                </div>
                <div className='Skillsdiv'>
                    <p className='Homeaboutprompt'>Developer Skills</p>
                    <div className='Skillsflexbox'>
                        <div className='Skillboxes'>
                            <img src={javascript} alt='Javascript Icon'></img>
                            <p className='Skillsprompts'>Javascript</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={react} alt='React Icon'></img>
                            <p className='Skillsprompts'>React</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={redux} alt='Redux Icon'></img>
                            <p className='Skillsprompts'>Redux</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={html} alt='HTML Icon'></img>
                            <p className='Skillsprompts'>HTML</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={css} alt='CSS Icon'></img>
                            <p className='Skillsprompts'>CSS</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={sass} alt='SASS Icon'></img>
                            <p className='Skillsprompts'>Sass</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={node} alt='Node Icon'></img>
                            <p className='Skillsprompts'>Node.js</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={express} alt='Express Icon'></img>
                            <p className='Skillsprompts'>Express.js</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={postgres} alt='Postgres Icon'></img>
                            <p className='Skillsprompts'>postgreSQL</p>
                        </div>
                        <div className='Skillboxes'>
                            <img src={sockets} alt='Socket Icon'></img>
                            <p className='Skillsprompts'>Socket.io</p>
                        </div>
                    </div>
                </div>
                <div className='Homeprojectdiv'>
                    <p className='Homeaboutprompt'>Projects</p>
                    <div className='Homeprojectflexbox'>
                        <Link to='/Teachio' className='Projectlinkbox'>
                            <p>Teachio</p>
                            <div className='Projectboxone'>
                                <div className='Projectboxdescription'>
                                    <div className='Projectdescriptionspan'>Teachio is an online platform for students to find tutors online. Click to learn more.</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/PearProgramming' className='Projectlinkbox'>
                            <p>PearProgramming</p>
                            <div className='Projectboxtwo'>
                                <div className='Projectboxdescription'>
                                    <div className='Projectdescriptionspan'>PearProgramming is an Online, Collaborative Code Editor App. Click to learn more.</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='Homecontactdiv'>
                    <p className='Homeaboutprompt'>Contact</p>
                    <div className='Homecontactflexbox'>
                        <div className='Homecontactparagraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eget libero non dapibus. 
                            Cras pharetra, augue ac efficitur porttitor, diam augue elementum arcu, eget egestas felis mauris 
                            vel nisl. Maecenas tellus justo, suscipit eget aliquam vel, ullamcorper sed turpis. Fusce convallis 
                            tincidunt ultricies. Aenean consequat elit a ipsum lobortis malesuada. Aenean ipsum nulla, dignissim sed 
                            erat pretium, semper sodales massa.
                        </div>
                        <div className='Homecontactlinks'>
                            <div className='Linkdivs'>
                                <img src={phone} alt='Phone Icon'/><span className='Linkspans'>(385)-335-2517</span>
                            </div>
                            <div className='Linkdivs'>
                                <img src={gmail} alt='Gmail Icon'/><span className='Linkspans'>mattcbodily@gmail.com</span>
                            </div>
                            <div className='Linkdivs'>
                                <a href='https://www.linkedin.com/in/matthewbodily/' className='Sociallinks'><img src={linkedin} alt='LinkedIn Icon'/><span className='Linkspans'>https://www.linkedin.com/in/matthewbodily/</span></a>
                            </div>
                            <div className='Linkdivs'>
                                <a href='https://github.com/mattcbodily' className='Sociallinks'><img src={github} alt='Github Icon'/><span className='Linkspans'>https://github.com/mattcbodily</span></a>
                            </div>
                            <div className='Linkdivs'>
                                <a href='https://twitter.com/Mattcbodily' className='Sociallinks'><img src={twitter} alt='Twitter Icon'/><span className='Linkspans'>https://twitter.com/Mattcbodily</span></a>
                            </div>
                            <div className='Linkdivs'>
                                <a href='https://www.facebook.com/matt.bodily.1' className='Sociallinks'><img src={facebook} alt='Facebook Icon'/><span className='Linkspans'>https://www.facebook.com/matt.bodily.1</span></a>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
}

export default Home;