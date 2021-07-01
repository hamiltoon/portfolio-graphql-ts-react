import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListOrders from './sections/ListOrders'

import CreateOrder from './sections/CreateOrder'

const Routes = () => {
  return (
    <Switch>
      <Route path="/list-orders" component={ListOrders} />
      <Route path="/create-order" component={CreateOrder}></Route>
      {/* <Route exact path="/" component={ListBlogPostsPage} /> */}
      {/* <Route path="/post/:id" component={ListBlogPostPage} /> */}
    </Switch>
  )
}

export default Routes
