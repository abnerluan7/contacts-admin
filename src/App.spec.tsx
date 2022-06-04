import { render } from '@testing-library/react'

import App from './App'

test('app', () => {
  const { getByText } = render(<App />)
  expect(getByText('Directory')).toBeInTheDocument()
})
