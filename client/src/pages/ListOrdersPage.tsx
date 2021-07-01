import React from 'react'

import { Segment, Container, Header } from 'semantic-ui-react'

import OrdersContainer from '../containers/OrdersContainer'
import ListOrders from '../sections/ListOrders'

const ListOrdersPage = () => {
  return (
    <Container>
      <Header>Orders</Header>
      <Segment>
        <OrdersContainer render={({ orderData }) => <ListOrders {...{ orderData }} />} />
      </Segment>
    </Container>
  )
}

export default ListOrdersPage
