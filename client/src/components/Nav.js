import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { login, logout, isLoggedIn } from '../utils/AuthService';


class Nav extends Component {

  render() {
    return (
        <div className="container">
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">SOS1718-11</Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
        </ul>
      </nav>
      </div>
    );
  }
}

export default Nav;