import React, { Component } from "react";
import "../css/App.css";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        window.alert("HALA");
      </div>
    );
  }
}

const mapStateToProps = state => {

   return {
    isLoggedIn: state.isLoggedIn,
    userName: state.userName

  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Dashboard);
