export type RemoteData<E, D> =
  | { type: 'NOT_ASKED' }
  | { type: 'LOADING' }
  | { type: 'FAILURE'; error: E }
  | { type: 'SUCCESS'; data: D }

export type CapacityId = number

export type Capacity = {
  id: CapacityId
  preliminaryCapacityDate: string
  capacityDose: number
};
export type ConsumptionId = number

export type Consumption = {
  id: number
  consumptionDate: string
  supplier: Supplier
  quantityVial: number
};

export type DeliveryId = number

export type Delivery = {
  id: number
  deliveryDate?: string
  plannedDeliveryDate?: string
  supplierId: Supplier
  quantityVial: number
  gnlReceiver: string
};

export type OrderId = number

export type Order = {
  id: OrderId
  orderDate: string
  desiredDeliveryDate: string
  quantityDose: number
  gnlReceiver: string
};

export type StockBalanceId = number

export type StockBalance = {
  id: StockBalanceId
  date: string
  supplier: Supplier
  quantityVial: number
  quantityDose: number
};

export type SupplierId = number

export type Supplier = {
  id: SupplierId
  name: string
  createdAt: string
};
