import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Form as FinalForm, Field } from 'react-final-form'
import { useHistory } from 'react-router'

import { InputFormField, validate, notEmpty, isPositiveInteger } from '../form'
import { postOrder } from '../api/orders'
import { Order } from '../types'
import { DateTime } from 'luxon'

const CreateOrderForm = () => {
  const history = useHistory()

  const onSubmit = ({ ...values }: Order) => {
    console.log(values)
    return postOrder(values).then((newOrder) => {
      if (newOrder.type === 'SUCCESS') history.push(`/list-orders`)
    })
  }
  return (
    <FinalForm
      onSubmit={onSubmit}
      initialValues={{
        orderDate: DateTime.now().toFormat('yyyy-MM-dd'),
      }}
      subscription={{
        submitting: true,
        hasValidationErrors: true,
        pristine: true,
      }}
      validate={validate<Order>({
        id: [],
        orderDate: [notEmpty()],
        desiredDeliveryDate: [notEmpty()],
        quantityDose: [notEmpty(), isPositiveInteger()],
        gnlReceiver: [],
      })}
      render={({ handleSubmit, form, submitting, pristine }) => {
        return (
          <Form loading={submitting} onSubmit={handleSubmit}>
            <Field
              name="orderDate"
              label="Order date"
              type="date"
              disabled
              component={InputFormField}></Field>
            <Field
              name="desiredDeliveryDate"
              label="Desired delivery date"
              type="date"
              component={InputFormField}></Field>
            <Field
              name="gnlReceiver"
              label="GNL-receiver"
              type="text"
              component={InputFormField}></Field>
            <Field
              name="quantityDose"
              label="Quantity (dose)"
              type="number"
              component={InputFormField}></Field>

            <Form.Group>
              <Form.Field control={Button} type="submit">
                Create
              </Form.Field>
              <Button type="button" onClick={() => form.reset()} disabled={submitting || pristine}>
                Reset
              </Button>
            </Form.Group>
          </Form>
        )
      }}
    />
  )
}

export default CreateOrderForm
