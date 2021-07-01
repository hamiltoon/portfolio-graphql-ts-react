import axios from 'axios'
import { RemoteData, Order, OrderId } from '../types'

export async function getOrders(): Promise<RemoteData<Error, Order[]>> {
  try {
    const response = await axios.get('https://retoolapi.dev/rvWk7d/orders?_sort=date&_order=asc')

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function getOrder(orderId: OrderId): Promise<RemoteData<Error, Order>> {
  try {
    const response = await axios.get(`https://retoolapi.dev/rvWk7d/orders/${orderId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function postOrder(data: Order): Promise<RemoteData<Error, Order>> {
  try {
    const response = await axios.post(`https://retoolapi.dev/rvWk7d/orders`, data)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function deleteOrder(orderId: OrderId): Promise<RemoteData<Error, {}>> {
  try {
    const response = await axios.delete(`https://retoolapi.dev/rvWk7d/orders/${orderId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}
