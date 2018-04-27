import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getFriends} from '../actions';
import {connect} from 'react-redux';

class App extends Component {
  state ={
    name: '', 
    age: '',
    email: ''
  };

  componentDidMount() {
    this.props.getFriends();
  }

  updateInput = e => {
    this.setState({ [e.target.name] : e.target.value})
  }
  addFriend = () => {
    const addFriend = {friend: this.state.friend}
    this.props.createFriend(newFriend);
  }

  render() {
    return (
      <div className="App">
      <input 
      type= "text"
      placeholder="friend name"
      value={this.state.name}
      name = "name"
      onChange= {this.updateInput}/>
      <input
	    onChange={this.updateInput}
	    value={this.state.age}
	   type="text"
	    name="age"
	    placeholder="age"
	     />
    	<input
	     onChange={this.updateInput}
	       value={this.state.email}
	        type="text"
	       name="email"
	       placeholder="email"
	        />
      <button onClick={this.addFriend}> Add friend </button>
      {this.props.friends.map((friend, i)=> {
        return (
          <div key= {i}> {friend.name} </div>
        )
      })
    }
      <img src ={logo} className="App-logo" alt="logo" />
         
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('In APP', state);
  return {
    friends : state.friends,
    error: state.error,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, {getFriends})(App);
