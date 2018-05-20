import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            stadium: '',
            date: '',
            first: '',
            second: '',
            third: '',
            fourth: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { stadium, date, first, second, third, fourth } = this.state;
        axios.post('https://sos1718-11.herokuapp.com//api/v2/basketball-stats', { stadium, date, first, second, third, fourth })
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { stadium, date, first, second, third, fourth } = this.state;
        return (
            <div>
            
                <Nav />
            <div className="container">
                    
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD STAT
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="stadium">Stadium:</label>
                <input type="text" className="form-control" name="stadium" value={stadium} onChange={this.onChange} placeholder="Stadium" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="text" className="form-control" name="date" value={date} onChange={this.onChange} placeholder="yyyy-mm-dd" />
              </div>
              <div className="form-group">
                <label htmlFor="first">1Q:</label>
                <input type="text" className="form-control" name="first" value={first} onChange={this.onChange} placeholder="1Q" />
              </div>
              <div className="form-group">
                <label htmlFor="second">2Q:</label>
                <input  type="number" className="form-control" name="second"  value={second} onChange={this.onChange} placeholder="2Q"/>
              </div>
              <div className="form-group">
                <label htmlFor="third">3Q:</label>
                <input type="number" className="form-control" name="third" value={third} onChange={this.onChange} placeholder="3Q" />
              </div>
              <div className="form-group">
                <label htmlFor="fourth">4Q:</label>
                <input type="number" className="form-control" name="fourth" value={fourth} onChange={this.onChange} placeholder="4Q" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
          <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>  back to Stat List</Link></h4>
        </div>
      </div>
      </div>
        );
    }
}

export default Create;
