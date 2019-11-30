import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import { Link, BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div> 
        <nav role="navigation">
          Austin Tumlinson
          <ul className="navContents">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>           

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </div>
     </BrowserRouter>
    );
  }
}
export default App;
