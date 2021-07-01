import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Form as FinalForm, Field } from 'react-final-form'
import { useHistory } from 'react-router'
import { DateTime } from 'luxon'

import { InputFormField, validate, notEmpty } from '../form'
import { Supplier } from '../types'
import { deleteSupplier, postSupplier, putSupplier } from '../api/suppliers'

const SuppliersForm = (props: { supplier?: Supplier }) => {
  const { supplier } = props
  const history = useHistory()

  const handleDeleteOrder = () => {
    if (supplier?.id) {
      deleteSupplier(supplier.id).then(() => {
        history.push(`/suppliers`)
      })
    }
  }

  const onSubmit = ({ ...values }: Supplier) => {
    const submitAction = values.id
      ? () => putSupplier(values.id, values)
      : () => postSupplier(values)

    return submitAction().then((savedSupplier) => {
      if (savedSupplier.type === 'SUCCESS') history.push(`/suppliers`)
    })
  }
  return (
    <FinalForm
      onSubmit={onSubmit}
      initialValues={
        supplier
          ? { ...supplier }
          : {
              createdAt: DateTime.now().toFormat('yyyy-MM-dd'),
            }
      }
      subscription={{
        submitting: true,
        hasValidationErrors: true,
        pristine: true,
      }}
      validate={validate<Supplier>({
        id: [],
        name: [notEmpty()],
        createdAt: [notEmpty()],
      })}
      render={({ handleSubmit, form, submitting, pristine }) => {
        return (
          <Form loading={submitting} onSubmit={handleSubmit}>
            <Field name="name" label="Supplier name" type="text" component={InputFormField}></Field>
            <Field
              name="createdAt"
              label="Created at"
              type="date"
              disabled
              component={InputFormField}></Field>
            <Form.Group>
              <Form.Field control={Button} type="submit">
                {supplier?.id ? 'Save' : 'Create'}
              </Form.Field>
              <Button type="button" onClick={() => form.reset()} disabled={submitting || pristine}>
                Reset
              </Button>
              {supplier?.id ? (
                <Button color="red" type="button" onClick={() => handleDeleteOrder()}>
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

export default SuppliersForm
