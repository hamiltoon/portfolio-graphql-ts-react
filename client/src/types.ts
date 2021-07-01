export type RemoteData<E, D> =
  | { type: 'NOT_ASKED' }
  | { type: 'LOADING' }
  | { type: 'FAILURE'; error: E }
  | { type: 'SUCCESS'; data: D }

export type CapacityId = number

export type Capacity = {
  id: CapacityId
  preliminaryCapacityDate: Date
  capacityDose: number
};
export type ConsumptionId = number

export type Consumption = {
  id: number
  consumptionDate: Date
  supplier: Supplier
  quantityVial: number
};

export type DeliveryId = number

export type Delivery = {
  id: number
  deliveryDate: Date
  plannedDeliveryDate: Date
  supplier: Supplier
  quantityVial: number
  gnlReceiver: string
};

export type OrderId = number

export type Order = {
  id: OrderId
  orderDate: Date
  desiredDeliveryDate: Date
  quantityDose: number
  gnlReceiver: string
};

export type StockBalanceId = number

export type StockBalance = {
  id: StockBalanceId
  date: Date
  supplier: Supplier
  quantityVial: number
  quantityDose: number
};

export type SupplierId = number

export type Supplier = {
  id: SupplierId
  name: String
  createdAt: Date
};
