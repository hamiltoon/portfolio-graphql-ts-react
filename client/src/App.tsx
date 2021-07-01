import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Grid, Container, Divider } from 'semantic-ui-react'

import Navigation from './sections/Navigation'
import Routes from './Routes'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Container text>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Navigation></Navigation>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Divider />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Routes />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
