import axios from 'axios'
import { RemoteData, Delivery, DeliveryId } from '../types'

export async function getDeliveries(): Promise<RemoteData<Error, Delivery[]>> {
  try {
    const response = await axios.get(
      'https://retoolapi.dev/P0ZOmK/deliveries?_sort=date&_order=asc',
    )

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function getDelivery(deliveryId: DeliveryId): Promise<RemoteData<Error, Delivery>> {
  try {
    const response = await axios.get(`https://retoolapi.dev/P0ZOmK/deliveries/${deliveryId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function postDelivery(data: Delivery): Promise<RemoteData<Error, Delivery>> {
  try {
    const response = await axios.post(`https://retoolapi.dev/P0ZOmK/deliveries`, data)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function putDelivery(
  deliveryId: DeliveryId,
  data: Delivery,
): Promise<RemoteData<Error, Delivery>> {
  try {
    const response = await axios.put(`https://retoolapi.dev/P0ZOmK/deliveries/${deliveryId}`, data)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function deleteDelivery(deliveryId: DeliveryId): Promise<RemoteData<Error, {}>> {
  try {
    const response = await axios.delete(`https://retoolapi.dev/P0ZOmK/deliveries/${deliveryId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}
