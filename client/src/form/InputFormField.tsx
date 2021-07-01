import React from 'react'
import { Input, Form, FormFieldProps } from 'semantic-ui-react'

const InputFormField = ({ input, meta, label, disabled }: FormFieldProps) => {
  return (
    <Form.Field
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
      label={label}
      {...input}></Form.Field>
  )
}
export default InputFormField
