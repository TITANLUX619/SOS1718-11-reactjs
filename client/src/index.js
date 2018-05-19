import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import './index.css';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';


ReactDOM.render(
    <Router>
      <div>
          <nav className="navbar">
            <div>
                <a href="/" className="brand-logo center">SOS1718-11</a>
            </div>
        </nav>
        <Route exact path='/' component={App} />
        <Route path='/edit/:stadium/:date' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:stadium/:date' component={Show} />
      </div>
  </Router>,
    document.getElementById('root')
);
registerServiceWorker();
