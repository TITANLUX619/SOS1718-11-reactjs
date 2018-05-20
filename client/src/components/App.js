import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import {isLoggedIn } from '../utils/AuthService';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: []
        };
    }

    componentDidMount() {
        axios.get('http://178.62.56.206:8080/api/v2/basketball-stats')
            .then(res => {
                this.setState({ stats: res.data });
                console.log(this.state.stats);
            });
    }

    render() {
        return (
            <div>
            
                <Nav />
            
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Stats List
                                </h3>
                            </div>
                            
                            
                            <div>
                            { isLoggedIn() ?
                                <div className="panel-body">
                               <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Stat</Link></h4>
                               <table className="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                        <th>Stadium & Date</th>
                                        <th>1Q</th>
                                        <th>2Q</th>
                                        <th>3Q</th>
                                        <th>4Q</th>
                                        </tr>
                                    </thead>
                                <tbody>
                                    {this.state.stats.map(stat =>
                                <tr>
                                    <td><Link to={`/show/${stat.stadium}/${stat.date}`}>{stat.stadium} {stat.date}</Link></td>
                                    <td>{stat.first}</td>
                                    <td>{stat.second}</td>
                                    <td>{stat.third}</td>
                                    <td>{stat.fourth}</td>
                                </tr>
                                )}
                                </tbody>
                            </table>
                        </div>: 
                                    <div className="jumbotron text-center"><h2>Get Access to Basketball Stats By Logging In</h2></div>
                            }
                     </div>
                            
                            
                            
                            
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
