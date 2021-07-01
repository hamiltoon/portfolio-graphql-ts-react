import React from 'react'
import { Loader, Table, Button, Message } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import { Supplier, RemoteData } from '../types'
import { routeMapping } from '../Routes'

type Props = { supplierData: RemoteData<Error, Supplier[]> }

const ListSuppliers = (props: Props) => {
  const { supplierData } = props

  switch (supplierData.type) {
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
                  <NavLink exact to={routeMapping.viewSuppliers.route(String(supplier.id))}>
                    {supplier.name}
                  </NavLink>
                </Table.Cell>
                <Table.Cell>{supplier.createdAt}</Table.Cell>
                <Table.Cell textAlign="right">
                  <NavLink exact to={routeMapping.editSuppliers.route(String(supplier.id))}>
                    <Button>Edit</Button>
                  </NavLink>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )
    case 'FAILURE':
      return (
        <Message>
          <Message.Header>Failed load the suppliers: </Message.Header>
          <p>{supplierData.error.message}</p>
        </Message>
      )
  }
}

export default ListSuppliers
