import React from 'react'
import { useEffect, useState } from 'react'

import { getSuppliers } from '../api/suppliers'
import { RemoteData, Supplier } from '../types'

type Props = {
  render: (props: {
    supplierData: RemoteData<Error, Supplier[]>,
  }) => React.ReactElement,
}

const DeliveryFormContainer = (props: Props) => {
  const [supplierData, setSuppliers] = useState<RemoteData<Error, Supplier[]>>({
    type: 'NOT_ASKED',
  })
  useEffect(() => {
    if (supplierData.type === 'NOT_ASKED') {
      setSuppliers({ type: 'LOADING' })
      getSuppliers().then(setSuppliers)
    }
  }, [supplierData.type])

  return props.render({ supplierData })
}

export default DeliveryFormContainer
