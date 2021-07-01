import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListOrders from './pages/ListOrdersPage'

import CreateOrder from './sections/CreateOrderForm'

export const routeMapping = {
  orders: {
    route: '/list-orders',
    component: ListOrders,
  },
  createOrder: {
    route: '/create-order',
    component: CreateOrder,
  },
}

const Routes = () => {
  return (
    <Switch>
      <Route path={routeMapping.orders.route} component={routeMapping.orders.component} />
      <Route
        path={routeMapping.createOrder.route}
        component={routeMapping.createOrder.component}></Route>
      {/* <Route exact path="/" component={ListBlogPostsPage} /> */}
      {/* <Route path="/post/:id" component={ListBlogPostPage} /> */}
    </Switch>
  )
}

export default Routes
