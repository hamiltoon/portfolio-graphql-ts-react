import renderer from 'react-test-renderer'

import ListSuppliers from './ListSuppliers'

jest.mock('react-router-dom', () => ({
  NavLink: 'NavlinkMock',
}))

describe('Suppliers list', () => {
  test('before loading', () => {
    const componentToTest = renderer.create(<ListSuppliers supplierData={{ type: 'NOT_ASKED' }} />)
    expect(componentToTest).toMatchSnapshot()
  })
  test('loading', () => {
    const componentToTest = renderer.create(<ListSuppliers supplierData={{ type: 'LOADING' }} />)
    expect(componentToTest).toMatchSnapshot()
  })
  test('error', () => {
    const componentToTest = renderer.create(
      <ListSuppliers
        supplierData={{
          type: 'FAILURE',
          error: { name: 'some-error-name', message: 'some-message' },
        }}
      />,
    )
    expect(componentToTest).toMatchSnapshot()
  })
  test('success', () => {
    const componentToTest = renderer.create(
      <ListSuppliers
        supplierData={{
          type: 'SUCCESS',
          data: [
            {
              id: 1,
              name: 'some-supplier-name',
              createdAt: 'some-creation-date',
            },
          ],
        }}
      />,
    )
    expect(componentToTest).toMatchSnapshot()
  })
})
