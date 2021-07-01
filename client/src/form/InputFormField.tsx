import React from 'react'
import { Input, Form, FormFieldProps } from 'semantic-ui-react'

const InputFormField = ({ input, meta, label, disabled }: FormFieldProps) => {
  return (
    <Form.Field
      {...input}
      error={
        meta.submitFailed && meta.error
          ? {
              content: meta.error,
              pointing: 'below',
            }
          : undefined
      }
      control={Input}
      disabled={disabled}
      label={label}></Form.Field>
  )
}
export default InputFormField
