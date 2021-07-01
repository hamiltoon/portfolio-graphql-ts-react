import React from 'react'
import { Form } from 'semantic-ui-react'

const SelectFormField = ({ input, meta, label, disabled, options }: any) => {
  console.log(input)
  console.log(input.value)
  return (
    <Form.Select
      {...input}
      onChange={(e, data) => input.onChange(data.value)}
      error={
        meta.submitFailed && meta.error
          ? {
              content: meta.error,
              pointing: 'below',
            }
          : undefined
      }
      disabled={disabled}
      label={label}
      options={options}></Form.Select>
  )
}
export default SelectFormField
