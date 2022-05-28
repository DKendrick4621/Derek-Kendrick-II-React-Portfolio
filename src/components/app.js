import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import ProtfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"
import portfolioDetail from "./portfolio/portfolio-detail";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

        <Router>
          <div>
          <h1>Derek Kendrick II React Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss")}</div>
          <NavigationContainer />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio/:slug" component={PortfiolioDetail} />

          </Switch>
          </div>
        </Router>
       
      </div>
    );
  }
}
