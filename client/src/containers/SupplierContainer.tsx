import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getSupplier } from '../api/suppliers'
import { Supplier, RemoteData } from '../types'
import { parseSupplierId } from '../utils/parse'

type Props = {
  render: (props: {
    supplierData: RemoteData<Error, Supplier>,
  }) => React.ReactElement,
}

const SupplierContainer = (props: Props) => {
  const [supplierData, setSupplier] = useState<RemoteData<Error, Supplier>>({
    type: 'NOT_ASKED',
  })
  const params = useParams<{ supplierId: string }>()

  useEffect(() => {
    if (supplierData.type === 'NOT_ASKED') {
      setSupplier({ type: 'LOADING' })
      getSupplier(parseSupplierId(params.supplierId)).then(setSupplier)
    }
  }, [supplierData.type, params.supplierId])

  return props.render({ supplierData })
}

export default SupplierContainer
