import React from 'react'
import NonHomeHeader from './../../Header/NonHomeHeader'
import './PiggyBank.css'
import ProjectVideo from './piggy_bank_two.mp4'
import Footer from './../../Footer/Footer'

const PiggyBank = () => {
    return(
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
                    <h2 className='Projectpage'>PiggyBank</h2>
                    <p className='Projecttech'>React | Styled Components | Chart.js</p>
                    <p>PiggyBank is a budgeting app built with React and Styled Components on the 
                       front-end.  The back-end is built using Node.js, Express.js, and a postgreSQL
                       database.  Chart.js is implemented to improve user experience by providing a 
                       visual representation of budget and expense information. From this app, a user 
                       can set their budget, input expenses, and view their budget history and expense 
                       trends.
                    </p>
                    <a href='https://github.com/mattcbodily/budget-app-hooks'><button className='project-links-button'>Github Repo</button></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PiggyBank;