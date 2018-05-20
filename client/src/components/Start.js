import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import {isLoggedIn } from '../utils/AuthService';



class Start extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            
                <Nav />
            
                    <div className="container">
                    <div>
                         <div>
                          { isLoggedIn() ?
                         <div className="jumbotron text-center">
                             <h2>View Basketball Stats</h2>
                             <Link className="btn btn-lg btn-success" to='/app'> Basketball Stats </Link>
                                    </div> : <div className="jumbotron text-center"><h2>Get Access to Basketball Stats By Logging In</h2></div>
          }
                     </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Start;
