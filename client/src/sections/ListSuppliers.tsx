import React from 'react'
import { Loader, Table, Button } from 'semantic-ui-react'
import { NavLink, useHistory } from 'react-router-dom'
// import { DateTime } from 'luxon'

import { Supplier, RemoteData } from '../types'

type Props = { supplierData: RemoteData<Error, Supplier[]> }

const ListOrders = (props: Props) => {
  const { supplierData } = props
  const history = useHistory()
  switch (supplierData.type) {
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
              <Table.HeaderCell>Supplier id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Created at</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {supplierData.data.map((supplier) => (
              <Table.Row key={supplier.id}>
                <Table.Cell>{supplier.id}</Table.Cell>
                <Table.Cell>
                  <NavLink exact to={`/order/${supplier.id}`}>
                    {supplier.name}
                  </NavLink>
                </Table.Cell>
                <Table.Cell>{supplier.createdAt}</Table.Cell>
                <Table.Cell textAlign="right">
                  <Button onClick={() => history.push(`/order/${supplier.id}/edit`)}>Edit</Button>
                </Table.Cell>
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
