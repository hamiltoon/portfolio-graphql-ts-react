import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import { routeMapping } from '../Routes'

const Navigation = () => (
  <nav>
    <Menu>
      <Menu.Item>
        <NavLink exact to="/">
          Start
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to={routeMapping.orders.route}>
          Orders
        </NavLink>
      </Menu.Item>
      {/* <Menu.Item>
        <NavLink exact to="/list-capacity">
          Capacity
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/list-consumption">
          Consumption
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/list-delivery">
          Delivery
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/list-stock-balance">
          StockBalance
        </NavLink>
      </Menu.Item> */}
      <Menu.Item>
        <NavLink exact to={routeMapping.suppliers.route}>
          Supplier
        </NavLink>
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item icon="plus">
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink exact to={routeMapping.createOrder.route}>
                Create order
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink exact to={routeMapping.addSuppliers.route}>
                Create supplier
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </nav>
)

export default Navigation
