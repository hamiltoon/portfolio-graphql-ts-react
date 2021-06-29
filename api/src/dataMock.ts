import casual from 'casual'
import { MockList } from 'graphql-tools'

const mocks = {
  Date: () => casual.date('YYYY-MM-DD'),
  DateTime: () => casual.date('YYYY-MM-DDTHH:mm:ss.SSSZZ'),
  Order: () => ({
    orderId: casual.integer(1, 999),
    // orderDate: () => casual.date('YYYY-MM-DDTHH:mm:ss.SSSZZ'),
    // desiredDeliveryDate: () => casual.date(),
    quantityDose: casual.integer(2000, 5000),
    gnlReceiver: casual.uuid,
  }),
  Query: () => ({
    listOrders: () => new MockList([3, 10]),
  }),
}

export default mocks
