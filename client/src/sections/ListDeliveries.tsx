import React from 'react'
import { Loader, Table, Message } from 'semantic-ui-react'
// import { DateTime } from 'luxon'

import { Delivery, RemoteData } from '../types'

type Props = { deliveryData: RemoteData<Error, Delivery[]> }

const ListDeliveries = (props: Props) => {
  const { deliveryData } = props

  switch (deliveryData.type) {
    case 'NOT_ASKED':
      return null
    case 'LOADING':
      return (
        <Loader active inline="centered">
          Loading
        </Loader>
      )

    case 'SUCCESS':
      return (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Order id</Table.HeaderCell>
              <Table.HeaderCell>Delivery date</Table.HeaderCell>
              <Table.HeaderCell>Planned delivery date</Table.HeaderCell>
              <Table.HeaderCell>Supplier</Table.HeaderCell>
              <Table.HeaderCell>Quantity (vial)</Table.HeaderCell>
              <Table.HeaderCell>GNL-receiver</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {deliveryData.data.map((delivery) => (
              <Table.Row key={delivery.id}>
                <Table.Cell>{delivery.id}</Table.Cell>
                <Table.Cell>{delivery.deliveryDate}</Table.Cell>
                <Table.Cell>{delivery.plannedDeliveryDate}</Table.Cell>
                <Table.Cell>{delivery.supplierId}</Table.Cell>
                <Table.Cell>{delivery.quantityVial}</Table.Cell>
                <Table.Cell>{delivery.gnlReceiver}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )
    case 'FAILURE':
      return (
        <Message>
          <Message.Header>Failed load the deliveries: </Message.Header>
          <p>{deliveryData.error.message}</p>
        </Message>
      )
  }
}

export default ListDeliveries
