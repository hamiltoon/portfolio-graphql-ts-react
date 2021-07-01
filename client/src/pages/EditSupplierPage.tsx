import React from 'react'

import { Segment, Container, Header } from 'semantic-ui-react'

import SupplierContainer from '../containers/SupplierContainer'
import SuppliersForm from '../sections/SuppliersForm'

const EditSupplierPage = () => {
  return (
    <Container>
      <Header>Edit supplier</Header>
      <Segment>
        <SupplierContainer
          render={({ supplierData }) => {
            switch (supplierData.type) {
              case 'SUCCESS':
                return <SuppliersForm supplier={supplierData.data} />
              default:
                return <p></p>
            }
          }}
        />
      </Segment>
    </Container>
  )
}

export default EditSupplierPage
