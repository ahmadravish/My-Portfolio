import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
      </Layout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
        <Route exact path='/Project' component={Project} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
