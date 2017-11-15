import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { client } from './appData/gcool/EndPoint.jsx'
// --------
import MainComp from './appData/00-Main.jsx'


class IndexComp extends Component {
  render() {
    return(
      <div>
        <ApolloProvider client={client} >
          <MainComp />
        </ApolloProvider>
      </div>
    )
  }
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))
