import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Register from './pages/Register/Register.js';
import Contact from './pages/Contact/Contact.js';
import Login from './pages/Login/Login.js';
import Navbar from './pages/BarraNav/BarraNav.js';
import Update from './pages/Update/Update.js';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />        
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route path="/update/:id_pessoa" component={Update}/>
          </div>
        </Router>
    );
  }
}

export default App;
