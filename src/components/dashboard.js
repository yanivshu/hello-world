import React, { Component } from "react";
import "../css/App.css";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import classnames from 'classnames';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import LoadingBar from 'react-redux-loading'
import Tabs from "./Tabs";
import glamorous from "glamorous";
import { BrowserRouter as Router, Route } from 'react-router-dom'
 

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Dashboard extends Component {

  constructor(props) {
    super(props);
  
  }
  render() {
    
    return (
      
      <div style={styles}>
      <Tabs
        activeTab={{
          id: "tab1"
        }}
      >
        <Tabs.Tab id="tab1" title="Unanswered">
          <glamorous.Div padding={20}>{this.props.userName}</glamorous.Div>
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Answered">
          <glamorous.Div padding={20}>This is tab 2</glamorous.Div>
        </Tabs.Tab>
        <Tabs.Tab id="tab3" title="Leaderboard">
          <glamorous.Div padding={20}>{this.props.userName}</glamorous.Div>
        </Tabs.Tab>
        <Tabs.Tab id="tab4" title="Add Question">
          <glamorous.Div padding={20}>This is tab 4</glamorous.Div>
        </Tabs.Tab>
        <Tabs.Tab id="tab5" title="Signout">
        
          <glamorous.Div padding={20}>This is tab 5</glamorous.Div>
        </Tabs.Tab>
      </Tabs>
  

      
    </div>
    
    )
  }
}


const mapStateToProps = state => {
  return {
     userName: state.userName,
     usersList: state.usersList
  };
};

const mapDispachToProps = dispatch => {
  return {
     
    updateUserName: (name) => dispatch({ type: "USER_NAME", value: name }),


  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Dashboard);

