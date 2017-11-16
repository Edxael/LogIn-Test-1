import React, { Component } from 'react'
import pic1 from './img/s1.png'

export default class extends Component {
  render() {
    return(
      <div>
        <div>Profile Component.</div>
        <div>
          <img src={pic1} alt="Miss Pic"/>
          <br/><br/>
        </div>
        <div>
          <div><strong>Name: </strong>Unknow</div>
          <div><strong>Age: </strong>Unknow</div>
          <div><strong>Adress: </strong>Unknow</div>
        </div>
      </div>
    )
  }
}
