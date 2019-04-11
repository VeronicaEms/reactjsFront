import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import Contact from './Contact';
import Login from './Login';
import Navbar from './BarraNav';



class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />        
          <Route path="/" exact component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          </div>
        </Router>
    );
  }
}

export default App;
