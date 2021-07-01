import React from 'react'

import { Segment, Container, Header } from 'semantic-ui-react'

import SuppliersContainer from '../containers/SuppliersContainer'
import ListSuppliers from '../sections/ListSuppliers'

const ListSuppliersPage = () => {
  return (
    <Container>
      <Header>Suppliers</Header>
      <Segment>
        <SuppliersContainer render={({ supplierData }) => <ListSuppliers {...{ supplierData }} />} />
      </Segment>
    </Container>
  )
}

export default ListSuppliersPage
