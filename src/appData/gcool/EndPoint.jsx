import ApolloClient, { HttpLink } from 'apollo-client-preset'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cja06c5z8b7470165gau2ozr6'
  })
})

export { client }
