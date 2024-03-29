import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import {isLoggedIn } from '../utils/AuthService';


class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stat: {}
        };
    }

    componentDidMount() {
        axios.get('https://sos1718-11.herokuapp.com/api/v2/basketball-stats/' + this.props.match.params['stadium'] + '/' + this.props.match.params['date'])
            .then(res => {
                this.setState({ stat: res.data });
                console.log(this.state.stat);
            });
    }

    delete(stadium, date) {
        console.log(stadium, date);
        axios.delete('https://sos1718-11.herokuapp.com/api/v2/basketball-stats/' + stadium + '/' + date)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div>
            
                <Nav />
            <div className="container">
            <div>
                            { isLoggedIn() ?
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.stat.stadium}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> back to Stats </Link></h4>
             <h3 className="panel-title">{this.state.stat.stadium}</h3>
            <dl>
              <dt>Date:</dt>
              <dd>{this.state.stat.date}</dd>
              <dt>1Q:</dt>
              <dd>{this.state.stat.first}</dd>
              <dt>2Q:</dt>
              <dd>{this.state.stat.second}</dd>
              <dt>3Q:</dt>
              <dd>{this.state.stat.third}</dd>
              <dt>4Q:</dt>
              <dd>{this.state.stat.fourth}</dd>
            </dl>
            <Link to={`/edit/${this.state.stat.stadium}/${this.state.stat.date}`} className="btn btn-success">Edit</Link>
            <button onClick={this.delete.bind(this, this.state.stat.stadium, this.state.stat.date)} className="btn btn-danger">Delete</button>
          </div>
           </div>: 
              <div className="jumbotron text-center"><h2>Get Access to Basketball Stats By Logging In</h2></div>}
        </div>
        
        </div>
      </div>
        );
    }
}

export default Show;
