import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Teachio from './Components/Projects/Teachio/Teachio';
import PearProgramming from './Components/Projects/PearProgramming/PearProgramming';

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Teachio' component={Teachio}/>
        <Route path='/PearProgramming' component={PearProgramming}/>
    </Switch>
)