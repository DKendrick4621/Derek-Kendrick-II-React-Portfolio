import React, { Component } from 'react';
import moment from 'moment';

import ProtfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./navigation/navigation-container"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Derek Kendrick II React Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss")}</div>
        <ProtfolioContainer />
       
      </div>
    );
  }
}
