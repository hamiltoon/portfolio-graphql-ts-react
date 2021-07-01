import React from 'react'
import { useEffect, useState } from 'react'
import { getSuppliers } from '../api/suppliers'
import { RemoteData, Supplier } from '../types'

type Props = {
  render: (props: {
    supplierData: RemoteData<Error, Supplier[]>,
  }) => React.ReactElement,
}
const OrdersContainer = (props: Props) => {
  const [supplierData, setSupplierData] = useState<RemoteData<Error, Supplier[]>>({
    type: 'NOT_ASKED',
  })
  useEffect(() => {
    if (supplierData.type === 'NOT_ASKED') {
      setSupplierData({ type: 'LOADING' })
      getSuppliers().then(setSupplierData)
    }
  }, [supplierData.type])

  return props.render({ supplierData })
}

export default OrdersContainer
