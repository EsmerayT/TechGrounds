import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Esmeray', age: 30}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 30},
        {name: 'Esmeray', age: 30}
      ]

    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>This is realy working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

