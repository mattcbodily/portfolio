import React from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        {routes}
      </div>
    </HashRouter>
  )
}

export default App;