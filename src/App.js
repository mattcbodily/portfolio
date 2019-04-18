import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          {routes}
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
