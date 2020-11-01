import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
  
    <div className="App">
      <Header/>

      <Router>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
