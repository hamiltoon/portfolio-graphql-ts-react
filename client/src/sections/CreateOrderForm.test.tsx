import CreateOrderForm from './CreateOrderForm'
import renderer from 'react-test-renderer'

describe('Create order form', () => {
  test('initial load', () => {
    const componentToTest = renderer.create(<CreateOrderForm />)
    expect(componentToTest).toMatchSnapshot()
  })
})
