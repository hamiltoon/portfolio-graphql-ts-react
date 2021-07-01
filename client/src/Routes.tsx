import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Message } from 'semantic-ui-react'
import DeliveryFormPage from './pages/DeliveryFormPage'

import EditSupplierPage from './pages/EditSupplierPage'
import ListDeliveriesPage from './pages/ListDeliveriesPage'
import ListOrdersPage from './pages/ListOrdersPage'
import ListSuppliersPage from './pages/ListSuppliersPage'
import CreateOrder from './sections/CreateOrderForm'

import SuppliersForm from './sections/SupplierForm'

const RouteNotImplemented = () => {
  console.error('Route not implemented')
  return null
}

export const routeMapping = {
  orders: {
    route: '/orders/list',
    component: ListOrdersPage,
  },
  suppliers: {
    route: '/suppliers/list',
    component: ListSuppliersPage,
  },
  deliveries: {
    route: '/deliveries/list',
    component: ListDeliveriesPage,
  },
  createOrder: {
    route: '/create-order',
    component: CreateOrder,
  },
  editSuppliers: {
    route: (supplierId: string) => `/suppliers/${supplierId}/edit`,
    component: EditSupplierPage,
  },
  viewSuppliers: {
    route: (supplierId: string) => `/suppliers/${supplierId}`,
    component: SuppliersForm,
  },
  addSupplier: {
    route: `/suppliers/add`,
    component: SuppliersForm,
  },
  addDelivery: {
    route: `/deliveries/add`,
    component: DeliveryFormPage,
  },
}

const Routes = () => {
  return (
    <Switch>
      <Route strict path={routeMapping.orders.route} component={routeMapping.orders.component} />

      <Route
        exact
        path="/"
        component={() => (
          <Message>
            <Message.Header>Start</Message.Header>
          </Message>
        )}
      />

      <Route
        exact
        path={routeMapping.createOrder.route}
        component={routeMapping.createOrder.component}
      />

      <Route
        exact
        path={routeMapping.addSupplier.route}
        component={routeMapping.addSupplier.component}
      />

      <Route
        exact
        path={routeMapping.addDelivery.route}
        component={routeMapping.addDelivery.component}
      />

      <Route
        exact
        path={routeMapping.editSuppliers.route(':supplierId')}
        component={routeMapping.editSuppliers.component}
      />

      <Route
        exact
        path={routeMapping.suppliers.route}
        component={routeMapping.suppliers.component}
      />

      <Route
        exact
        path={routeMapping.deliveries.route}
        component={routeMapping.deliveries.component}
      />

      <Route path="*" component={RouteNotImplemented} />
    </Switch>
  )
}

export default Routes
