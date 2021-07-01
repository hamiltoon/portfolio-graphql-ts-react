import React from 'react'
import { Order, RemoteData } from '../types'
import { Loader, Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
// import { DateTime } from 'luxon'

type Props = { orderData: RemoteData<Error, Order[]> }

const ListOrders = (props: Props) => {
  const { orderData } = props

  switch (orderData.type) {
    case 'NOT_ASKED':
      return <p>Not asked</p>
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
              <Table.HeaderCell>GNL-receiver</Table.HeaderCell>
              <Table.HeaderCell>Order date</Table.HeaderCell>
              <Table.HeaderCell>Desired delivery date</Table.HeaderCell>
              <Table.HeaderCell>Quantity (dose)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {orderData.data.map((order) => (
              <Table.Row key={order.id}>
                <Table.Cell>{order.id}</Table.Cell>
                <Table.Cell>
                  <NavLink exact to={`/order/${order.id}`}>
                    {order.gnlReceiver}
                  </NavLink>
                </Table.Cell>
                {/* IF order.orderDate would be a JS date object */}
                {/* <Table.Cell>{DateTime.fromISO(order.orderDate).toLocaleString()}</Table.Cell>  */}
                <Table.Cell>{order.orderDate}</Table.Cell>
                <Table.Cell>{order.desiredDeliveryDate}</Table.Cell>
                <Table.Cell>{order.quantityDose}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )
    case 'FAILURE':
      return <p>Failed load the posts</p>
  }
}

export default ListOrders
