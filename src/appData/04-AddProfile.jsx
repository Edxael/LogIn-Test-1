import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createUser(
              $address: String!,
              $age: Int!,
              $firstname: String!,
              $lastname: String!,
              $pic: String!,
              $email: String!,
              $password: String!
            )
  {
    createUser( address: $address, age: $age, firstname: $firstname, lastname: $lastname, pic: $pic, email: $email, password: $password ){
      address
      age
      firstname
      lastname
      pic
      email
      password
    }
  }
`

class AddNewUser extends Component {
  constructor(props){
    super(props)
    this.state = { address: "", age: "", firstname: "", lastname: "", pic: "", email: "", password: "" }
  }

  addFile = () => {
    console.log("Add Record")
    this.props.mutate({
            variables: {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              age: parseInt(this.state.age, 0),
              address: this.state.address,
              pic: `${this.state.pic}?raw=true`,
              email: this.state.email,
              password: this.state.password
            }
      })

    this.setState({ address: "", age: "", firstname: "", lastname: "", pic: "", email: "", password: "" })
  }

  render() {
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%", padding: "3px 12px" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    const MainSty = { padding: "20px" }
    return(
      <div style={MainSty}>
        <div>Add Profile.</div>

        <div style={mySty}>

          <div> <label style={labelSty}>Firstname:  </label> <input style={inputSty} type="text" placeholder="Firstname..." value={this.state.firstname} onChange={ (event) => { this.setState({ firstname: event.target.value }) } } /></div>
          <div> <label style={labelSty}>Lastname:  </label> <input style={inputSty} type="text" placeholder="Lastname..." value={this.state.lastname} onChange={ (event) => { this.setState({ lastname: event.target.value }) } } /></div>
          <div> <label style={labelSty}>Age:  </label> <input style={inputSty} type="text" placeholder="Age..." value={this.state.age} onChange={ (event) => { this.setState({ age: event.target.value }) } } /></div>
          <div> <label style={labelSty}>Address:  </label> <input style={inputSty} type="text" placeholder="Address..." value={this.state.address} onChange={ (event) => { this.setState({ address: event.target.value }) } } /></div>
          <div> <label style={labelSty}>Pic:  </label> <input style={inputSty} type="text" placeholder="Pic..." value={this.state.pic} onChange={ (event) => { this.setState({ pic: event.target.value }) } } /></div>
          <div> <label style={labelSty}>Email:  </label> <input style={inputSty} type="text" placeholder="Email..." value={this.state.email} onChange={ (event) => { this.setState({ email: event.target.value }) } } /></div>
          <div> <label style={labelSty}>Password:  </label> <input style={inputSty} type="text" placeholder="Password..." value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } /></div>

          <br/>

          <button style={btnSty} onClick={()=>{this.addFile()}} >Add Game</button>
        </div>
      </div>
    )
  }
}

export default graphql(MUTATION)(AddNewUser)
