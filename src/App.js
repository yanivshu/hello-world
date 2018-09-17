import React, { Component, Fragment } from 'react';
import "./css/App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from "react-redux";
import LoadingBar from 'react-redux-loading'
import { Redirect } from 'react-router-dom'


import Login from './components/login'
import Dashboard from './components/dashboard'


class App extends Component {


  render() {
 

    return (
      <Router>
        <Fragment>

          <div className="App">
            {this.props.userName == '' ?
              <div>
                <Route path="/" exact component={Login} />
              </div>
              :

              <div>

                <Redirect to={{
                  pathname: '/dashboard'
                }} />

                <Route path="/dashboard" component={Dashboard} />
              </div>}

          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.userName

  };
};

export default connect(mapStateToProps)(App);
