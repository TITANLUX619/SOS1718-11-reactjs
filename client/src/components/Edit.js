import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stat: {}
    };
  }

  componentDidMount() {
    axios.get('http://178.62.56.206:16778/api/v2/basketball-stats/' + this.props.match.params['stadium'] + '/' + this.props.match.params['date'])
      .then(res => {
        this.setState({ stat: res.data });
        console.log(this.state.stat);
      });
  }

  onChange = (e) => {
    const state = this.state.stat
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

        const { stadium, date, first, second, third, fourth } = this.state;

    axios.put('http://178.62.56.206:16778/api/v2/basketball-stats/' + this.props.match.params.stadium + '/' + this.props.match.params.date, { stadium, date, first, second, third, fourth } )
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.stadium + '/' + this.props.match.params.date)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT STAT
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>  back to Stat List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="stadium">Stadium:</label>
                <input type="text" className="form-control" name="stadium" value={this.state.stat.stadium} onChange={this.onChange} placeholder="Stadium" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="text" className="form-control" name="date" value={this.state.stat.date} onChange={this.onChange} placeholder="yyyy-mm-dd" />
              </div>
              <div className="form-group">
                <label htmlFor="first">1Q:</label>
                <input type="number" className="form-control" name="first" value={this.state.stat.first} onChange={this.onChange} placeholder="1Q" />
              </div>
              <div className="form-group">
                <label htmlFor="second">2Q:</label>
                <input  type="number" className="form-control" name="second" onChange={this.onChange} placeholder="2Q" value={this.state.stat.second}/>
              </div>
              <div className="form-group">
                <label htmlFor="third">3Q:</label>
                <input type="number" className="form-control" name="third" value={this.state.stat.third} onChange={this.onChange} placeholder="3Q" />
              </div>
              <div className="form-group">
                <label htmlFor="fourth">4Q:</label>
                <input type="number" className="form-control" name="fourth" value={this.state.stat.fourth} onChange={this.onChange} placeholder="4Q" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;