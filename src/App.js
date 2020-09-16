import React from 'react';
import logo from './logo.svg';
import './App.css';

/*
 * ISCG7420 Week 9 Topics.
 * Create-react-app revision
 * npm run eject
 * SemanticUI vs MaterialUI
 * React Dev Tools
 * Using props & state revision
 * ES6 Destructuring, Spread
 * Component lifecycle hooks
 * Event handling
 * map()
 * FastAPI
 * fetch()
 * Promises
 * Fragments
 * Ternary operator for stateless components
 * Default/Named Exports, Imports / Destructured imports
 * React-Router and window.history.pushState()
*/


// Functions
class MyCounter extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter: -2,
      message: 'No message',
    }
  }
  
  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      message: e.target.value,
    })
    console.log('Typed something: ' + e.target.value)
  }
  
  handleClick = () => {
    this.setState((state, props) => {
      return {
        counter: this.state.counter + 1
      }
    })
    
    console.log(`%c Button clicked ${this.state.counter} times.`, 'background: #2F2; color: #f0f')
  }
  
  render() {
    return (
      <div>
        <h1>Counter {this.state.counter}. == {this.state.message}</h1>
        <input type="text" value={this.state.message} onChange={this.handleInput} />
        <input type="button" value="Add 1" onClick={this.handleClick} />
      </div>
    )
  }
}


const App = function() {
  return <MyCounter />
}

function OldApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
