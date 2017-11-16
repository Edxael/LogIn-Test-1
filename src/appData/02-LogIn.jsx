import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = { username: "", password: "" }
  }

  exe1 = ()=>{
    console.log("inside of Exe1")
    console.log("User: ", this.state.username)
    console.log("Pass: ", this.state.password)

    this.setState({ username: "" })
    this.setState({ password: "" })
  }

  render() {
    const mainDiv = { }
    const inputSt = { width: "75%", padding: "10px", margin: "10px" }
    const LogInSqr = { border: "2px solid black", textAline: "center", margin: "20px", backgroundColor: "rgb(176, 191, 250)" }
    return(
      <div style={mainDiv}>
        <div>Log In Component</div>

        <div style={LogInSqr}>
          <h3>Log In</h3>
          <input style={inputSt} type="text" placeholder="Username..." value={this.state.username} onChange={ (event) => { this.setState({ username: event.target.value }) } } />
          <br/>
          <input style={inputSt} type="password" placeholder="Password..." value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } />
          <br/>
          <button onClick={this.exe1}>Log - In</button>
          <br/>
          <Link to="/3">UserP</Link>
          <br/><br/>
        </div>

      </div>
    )
  }
}
