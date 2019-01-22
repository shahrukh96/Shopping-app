import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
     
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href=" ">Shopping-App</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to = '/'>Home</Link></li>
              <li><Link to = '/Category'>Category</Link></li>
              <li><a href=" ">Contact Us</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href=" "><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href=" "><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
    )
  }
}

export default Navbar;