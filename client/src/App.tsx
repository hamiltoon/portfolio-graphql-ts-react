import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter } from 'react-router-dom'
import { Grid, Container, Divider } from 'semantic-ui-react'

import Navigation from './sections/Navigation'
import Routes from './Routes'

function App() {
  return (
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
  )
}

export default App
