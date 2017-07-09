import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Pluralsight Administation</h1>
        <p>React, Redux and Reacu Router in ES6 For ultra-responsive web apps</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
