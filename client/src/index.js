import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import './index.css';
import App from './components/App';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import { isLoggedIn } from './utils/AuthService';
import Callback from './components/Callback';


ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/edit/:stadium/:date' component={Edit}/>
        <Route path='/create' component={Create}/>
        <Route path='/show/:stadium/:date' component={Show}/>
        <Route path='/callback' component={Callback} />

      </div>
  </Router>,
    document.getElementById('root')
);
//registerServiceWorker();
