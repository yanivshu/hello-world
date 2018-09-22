import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './login'
import { connect } from "react-redux";



const TabsContext = React.createContext({
  prevActiveTab: {},
  activeTab: {}
});


class TabProvider extends React.Component {
  
  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab
  };

  addTab = newTab => {
    let isNewTabFound;

    for (let i in this.state.tabs) {
      let tab = this.state.tabs[i];

      if (tab.id === newTab.id) {
        isNewTabFound = true;
        break;
      }
    }

    if (!isNewTabFound) {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.concat(newTab)
        };
      });
    }
  };

  removeTab = tabId => {
    this.setState((prevState, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId)
      };
    });
  };

  onClick = tab => event => {

  
    this.setState((prevState, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab
      };
    });
  };

  render() {

    

    return (
      <TabsContext.Provider
        value={{
          context: {
            ...this.state,
            addTab: this.addTab,
            removeTab: this.removeTab,
            onClick: this.onClick
          }
        }}
      >
        {this.props.children}
      </TabsContext.Provider>
    );
  }
}

const TabConsumer = TabsContext.Consumer;

export { TabProvider, TabConsumer };


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
)(TabProvider);
