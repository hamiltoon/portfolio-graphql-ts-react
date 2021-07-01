import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Form as FinalForm, Field } from 'react-final-form'
import { useHistory } from 'react-router'

import { InputFormField, validate, notEmpty } from '../form'
import { Delivery, Supplier } from '../types'
import { deleteDelivery, postDelivery, putDelivery } from '../api/deliveries'
import { routeMapping } from '../Routes'
import SelectFormField from '../form/SelectFormField'

const DeliveryForm = (props: { delivery?: Delivery, suppliers: Supplier[] }) => {
  const { delivery, suppliers } = props
  const history = useHistory()

  const handleDeleteDelivery = () => {
    if (delivery?.id) {
      deleteDelivery(delivery.id).then(() => {
        history.push(routeMapping.deliveries.route)
      })
    }
  }

  const onSubmit = ({ ...values }: Delivery) => {
    const submitAction = values.id
      ? () => putDelivery(values.id, values)
      : () => postDelivery(values)

    return submitAction().then((savedDelivery) => {
      if (savedDelivery.type === 'SUCCESS') history.push(routeMapping.deliveries.route)
    })
  }

  return (
    <FinalForm
      onSubmit={onSubmit}
      initialValues={delivery ? { ...delivery } : {}}
      subscription={{
        submitting: true,
        hasValidationErrors: true,
        pristine: true,
      }}
      validate={validate<Delivery>({
        id: [],
        plannedDeliveryDate: [notEmpty()],
        deliveryDate: [],
        quantityVial: [notEmpty()],
        gnlReceiver: [notEmpty()],
        supplierId: [],
      })}
      render={({ handleSubmit, form, submitting, pristine }) => {
        return (
          <Form loading={submitting} onSubmit={handleSubmit}>
            <Field
              name="deliveryDate"
              label="Delivery date"
              type="date"
              component={InputFormField}></Field>

            <Field
              name="plannedDeliveryDate"
              label="Planned delivery date"
              type="date"
              component={InputFormField}></Field>

            <Field
              name="quantityVial"
              label="Quantity (vial)"
              type="number"
              component={InputFormField}></Field>

            <Field
              name="supplierId"
              label="Supplier"
              options={suppliers.map((supplier) => ({
                value: supplier.id,
                key: supplier.id,
                text: supplier.name,
              }))}
              component={SelectFormField}></Field>

            <Form.Group>
              <Form.Field control={Button} type="submit">
                {delivery?.id ? 'Save' : 'Create'}
              </Form.Field>
              <Button type="button" onClick={() => form.reset()} disabled={submitting || pristine}>
                Reset
              </Button>
              {delivery?.id ? (
                <Button color="red" type="button" onClick={() => handleDeleteDelivery()}>
                  Delete
                </Button>
              ) : null}
            </Form.Group>
          </Form>
        )
      }}
    />
  )
}

export default DeliveryForm
