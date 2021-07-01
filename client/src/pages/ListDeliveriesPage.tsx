import React from 'react'

import { Segment, Container, Header } from 'semantic-ui-react'

import DeliveriesContainer from '../containers/DeliveriesContainer'
import ListDeliveries from '../sections/ListDeliveries'

const ListDeliveriesPage = () => {
  return (
    <Container>
      <Header>Deliveries</Header>
      <Segment>
        <DeliveriesContainer
          render={({ deliveryData }) => <ListDeliveries {...{ deliveryData }} />}
        />
      </Segment>
    </Container>
  )
}

export default ListDeliveriesPage
