import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Order } from '../generated/graphql'
import {
  Segment,
  Container,
  Header,
  List,
  Loader as SemanticLoader,
  Button,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { DateTime } from 'luxon'

const ORDERS = gql`
  {
    listOrders {
      orderId
      gnlReceiver
      orderDate
      desiredDeliveryDate
    }
  }
`
// type Props = { loading: boolean, error?: ApolloError, children: ReactNode }

// const Loader = ({ error, loading, children }: Props) => {
//   if (error) return <p>Error</p>
//   return loading ? <SemanticLoader /> : { children }
// }

const ListOrders = () => {
  const { loading, data } = useQuery<Record<'listOrders', Order[]>>(ORDERS)
  console.log(data?.listOrders)
  return (
    <Container>
      <Header>Orders</Header>
      <Segment>
        {loading ? (
          <SemanticLoader />
        ) : (
          <List divided relaxed>
            {data?.listOrders.map((order) => (
              <List.Item key={order.orderId}>
                <List.Content floated="left">
                  <List.Header exact to={`/order/${order.orderId}`} as={NavLink}>
                    {DateTime.fromISO(order.orderDate).toLocaleString()}
                  </List.Header>
                  <List.Description exact to={`/order/${order.orderId}`} as={NavLink}>
                    {order.gnlReceiver}
                  </List.Description>
                </List.Content>
                <List.Content floated="right">
                  <Button>Edit</Button>
                </List.Content>
              </List.Item>
            ))}
          </List>
        )}
      </Segment>
    </Container>
  )
}

export default ListOrders
