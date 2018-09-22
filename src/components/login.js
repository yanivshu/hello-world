import React, { Component } from "react";
import {Fragment} from 'react'

import "../css/App.css";
import { connect } from "react-redux";
import { _getUsers, _getUsersArray } from '../util/_DATA'
import {Redirect} from 'react-router-dom'



class Login extends Component {

  
  constructor(props) {
    super(props);
    

    

    
    
    this.state = {
        usersArray: []

        
        };


        
      
    //window.alert("users " + props.state);
      }
  

  componentDidMount(){
      
    
    if(this.state.usersArray.length === 0)
    {
    Promise.all([
        _getUsers()
      ]).then(users => { 
        for (var key in users[0]) {
            if (users[0].hasOwnProperty(key)) {
                var obj = key;
                const usersCopy = this.state.usersArray.concat(users[0][key].name)
                this.setState(() => ({
                  usersArray: usersCopy
                }))
          
            }
        }        
      });
    }
  }


  handleChange = (event) => {
    

  this.props.updateUserName( event.target.value);




  };

  

  render() {

    const { options, value } = this.state;

    
    
    return (

      <p className="App-intro">

{  

  

    <Fragment>
   
            <select id="select" onChange={this.handleChange} value={value}>
            <option value="0">Choose user</option>
          
            {this.state.usersArray.map(element => <option value={element}>{element}</option>)}

           
            </select>

          
          </Fragment>
          

}



      </p>

    );
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
)(Login);
