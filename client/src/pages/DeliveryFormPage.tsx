import React from 'react'

import { Segment, Container, Header } from 'semantic-ui-react'

import DeliveryForm from '../sections/DeliveryForm'
import DeliveryFormContainer from '../containers/DeliveryFormContainer'

const DeliveryFormPage = () => {
  return (
    <Container>
      <Header>Delivery</Header>
      <Segment>
        <DeliveryFormContainer
          render={({ supplierData }) => {
            switch (supplierData.type) {
              case 'SUCCESS':
                return <DeliveryForm suppliers={supplierData.data}></DeliveryForm>
              default:
                return <p></p>
            }
          }}
        />
      </Segment>
    </Container>
  )
}

export default DeliveryFormPage
