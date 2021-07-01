import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EditSupplierPage from './pages/EditSupplierPage'

import ListOrdersPage from './pages/ListOrdersPage'
import ListSuppliersPage from './pages/ListSuppliersPage'
import CreateOrder from './sections/CreateOrderForm'
import SuppliersForm from './sections/SuppliersForm'

const RouteNotImplemented = () => {
  console.error('Route not implemented')
  return null
}

export const routeMapping = {
  orders: {
    route: '/list-orders',
    component: ListOrdersPage,
  },
  suppliers: {
    route: '/suppliers',
    component: ListSuppliersPage,
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
  addSuppliers: {
    route: `/suppliers/add`,
    component: SuppliersForm,
  },
}

const Routes = () => {
  return (
    <Switch>
      <Route strict path={routeMapping.orders.route} component={routeMapping.orders.component} />

      <Route
        exact
        path={routeMapping.createOrder.route}
        component={routeMapping.createOrder.component}
      />

      <Route
        exact
        path={routeMapping.addSuppliers.route}
        component={routeMapping.addSuppliers.component}
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

      <Route path="*" component={RouteNotImplemented} />

      {/* <Route exact path="/" component={ListBlogPostsPage} /> */}
      {/* <Route path="/post/:id" component={ListBlogPostPage} /> */}
    </Switch>
  )
}

export default Routes
