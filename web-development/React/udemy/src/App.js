import React, { Component } from 'react';
import './App.css';
import Userinput from './Userinput/Userinput';
import Useroutput from './Useroutput/Useroutput';

class App extends Component {
  state = {
    Useroutput: [
      { username: 'Esmeray' },
    ]
  };

  nameChangedHandler = (event) => {
    this.setState({
      Userinput: [
        { username: event.target.value },
      ]
    })
  }

  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // };


    return (
      <div className="App">
        <Useroutput
          username={this.state.Useroutput[0].username}
          changed={this.nameChangedHandler}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
