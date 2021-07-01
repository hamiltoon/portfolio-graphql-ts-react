import React from 'react'
import { useEffect, useState } from 'react'
import { getOrders } from '../api/orders'
import { Order, RemoteData } from '../types'

type Props = {
  render: (props: {
    orderData: RemoteData<Error, Order[]>,
  }) => React.ReactElement,
}
const OrdersContainer = (props: Props) => {
  const [orderData, setOrders] = useState<RemoteData<Error, Order[]>>({
    type: 'NOT_ASKED',
  })
  console.log({ orderData })
  useEffect(() => {
    if (orderData.type === 'NOT_ASKED') {
      setOrders({ type: 'LOADING' })
      getOrders().then(setOrders)
    }
  }, [orderData.type])

  return props.render({ orderData })
}

export default OrdersContainer
