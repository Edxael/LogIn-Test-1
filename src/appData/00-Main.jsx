import React, { Component } from 'react'

import { Nav, NavItem } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


import Home from './01-Home.jsx'
import LogIn from './02-LogIn.jsx'
import Profile from './03-Profile.jsx'
import AddProfile from './04-AddProfile.jsx'


export default class extends Component {
  render() {
    const mainDiv = { textAlign: "center" }
    return(
      <div style={mainDiv}>

        <Router>
          <div>

              <div>
                <Link to="/">Home</Link>  |  <Link to="/1">Log-In</Link>  |  <Link to="/3">Add-Profile</Link>
              </div>

              <hr/>

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={LogIn}/>
                <Route path="/3" component={AddProfile}/>
              </Switch>

          </div>
        </Router>

      </div>
    )
  }
}
