import React from 'react'
import { useEffect, useState } from 'react'

import { getDeliveries } from '../api/deliveries'
import { Delivery, RemoteData } from '../types'

type Props = {
  render: (props: {
    deliveryData: RemoteData<Error, Delivery[]>,
  }) => React.ReactElement,
}

const DeliveriesContainer = (props: Props) => {
  const [deliveryData, setDeliveries] = useState<RemoteData<Error, Delivery[]>>({
    type: 'NOT_ASKED',
  })
  useEffect(() => {
    if (deliveryData.type === 'NOT_ASKED') {
      setDeliveries({ type: 'LOADING' })
      getDeliveries().then(setDeliveries)
    }
  }, [deliveryData.type])

  return props.render({ deliveryData })
}

export default DeliveriesContainer
