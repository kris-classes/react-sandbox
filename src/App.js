import React from 'react'
import './App.css'

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
async function getTime() {
  console.log('Making request')
  //let response = await fetch('http://worldtimeapi.org/api/timezone/Pacific/Auckland')
  let response = await fetch('http://localhost:8000/time')
  let responseJson = await response.json()
  console.log('Got response:')
  console.log(responseJson)
  return responseJson['datetime']
}

class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 'None yet',
    }

    this.handleClickWithAsync = this.handleClickWithAsync.bind(this)
  }

  handleClickWithPromise = (e) => {
    e.preventDefault()
    console.log('Clicked! -')
    let time = getTime().then(
      this.setState({
        time: 'Promise set the time',
      })
    )
  }

  async handleClickWithAsync(e) {
    e.preventDefault()
    console.log('Clicked! -')
    let time = await getTime()
    this.setState({
      time: time,
    })
  }

  render() {
    //let { currentTime } = this.props
    //let { time='blahblah' } = this.state
    let { time='blahblah' } = this.state
    return (
      <>
        <h3 style={{'color': 'red'}}>Time: {time}</h3>
        <input
          type="button"
          value="Get Time"
          //onClick={(e) => this.handleClickWithAsync(e)}
          onClick={this.handleClickWithAsync}
        />
      </>
    )
  }
}




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
        <h5>Counter {this.state.counter}. == {this.state.message}</h5>
        <input type="text" value={this.state.message} onChange={this.handleInput} />
        <input type="button" value="Add 1" onClick={this.handleClick} />
      </div>
    )
  }
}


const App = function() {
  return <Time currentTime={"2020-09-17T13:57:09.142406+12:00"}/>
}


export default App
