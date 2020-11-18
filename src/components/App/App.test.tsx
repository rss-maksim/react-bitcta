import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { App } from './App'

test('renders learn react link', () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  )
  const headerElement = screen.getByText(/Now you can track/i)
  expect(headerElement).toBeInTheDocument()
  const descElement = screen.getByText(/Just enter the/i)
  expect(descElement).toBeInTheDocument()
})
