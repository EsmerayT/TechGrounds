import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username:'Esmeray_Tasgit'
  }

  inputUsername = (event) => {
    this.setState({username: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <UserInput input={this.inputUsername} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Esmeray" />
      </div>
    );
  }
}

export default App;
