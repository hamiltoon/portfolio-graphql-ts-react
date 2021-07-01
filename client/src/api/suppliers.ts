import axios from 'axios'
import { RemoteData, Supplier, SupplierId } from '../types'

export async function getSuppliers(): Promise<RemoteData<Error, Supplier[]>> {
  try {
    const response = await axios.get('https://retoolapi.dev/1kzcEC/suppliers?_sort=date&_order=asc')

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function getSupplier(orderId: SupplierId): Promise<RemoteData<Error, Supplier>> {
  try {
    const response = await axios.get(`https://retoolapi.dev/1kzcEC/suppliers/${orderId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function postSupplier(data: Supplier): Promise<RemoteData<Error, Supplier>> {
  try {
    const response = await axios.post(`https://retoolapi.dev/1kzcEC/suppliers`, data)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function deleteSupplier(orderId: SupplierId): Promise<RemoteData<Error, {}>> {
  try {
    const response = await axios.delete(`https://retoolapi.dev/1kzcEC/suppliers/${orderId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}
