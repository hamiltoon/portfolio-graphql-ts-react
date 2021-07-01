import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Form as FinalForm, Field } from 'react-final-form'
import { useHistory } from 'react-router'

import {
  InputFormField,
  TextAreaFormField,
  validate,
  notEmpty,
  hasMaxLength,
  isEmailAddress,
} from '../form'
import { Order } from '../generated/graphql'
// import { postPost } from '../api/posts'

const CreateOrderForm = () => {
  // const history = useHistory()

  const onSubmit = ({ ...values }: Order) => {
    console.log(values)
    // return postPost(values).then((newOrder: Order) => {
    //   if (newOrder.type === 'SUCCESS') history.push(`/post/${newOrder.data.id}`)
    // })
  }
  return (
    <FinalForm
      onSubmit={onSubmit}
      subscription={{
        submitting: true,
        hasValidationErrors: true,
        pristine: true,
      }}
      validate={validate<Order>({
        orderId: [],
        orderDate: [notEmpty()],
        desiredDeliveryDate: [],
        quantityDose: [],
        gnlReceiver: [],
        __typename: [],
      })}
      render={({ handleSubmit, form, submitting, pristine }) => {
        return (
          <Form loading={submitting} onSubmit={handleSubmit}>
            <Field
              label="Order date"
              type="date"
              name="orderDate"
              component={InputFormField}></Field>
            {/* <Field
              label="Preamble"
              type="text"
              name="preamble"
              component={TextAreaFormField}></Field>
            <Field label="Text" type="text" name="body" component={TextAreaFormField}></Field>
            <Field label="Author" type="text" name="author" component={InputFormField}></Field>
            <Field label="Email" type="email" name="email" component={InputFormField}></Field>
            <Field label="Date" type="date" name="date" component={InputFormField}></Field> */}
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
