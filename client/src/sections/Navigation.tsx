import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

const Navigation = () => (
  <nav>
    <Menu>
      <Menu.Item>
        <NavLink exact to="/">
          Start
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/list-orders">
          Orders
        </NavLink>
      </Menu.Item>
      <Menu.Item>
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
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/list-supplier">
          Supplier
        </NavLink>
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item icon="plus">
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink exact to="/create-order">
                Create order
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </nav>
)

export default Navigation
