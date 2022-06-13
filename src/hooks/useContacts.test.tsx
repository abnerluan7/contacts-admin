import { QueryClient, QueryClientProvider } from 'react-query'

import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { ContactsProvider, useContacts, MyProps } from './useContacts'

describe('App Contacts List', () => {
  const queryClient = new QueryClient()
  const wrapper = ({ children }: MyProps) => (
    <QueryClientProvider client={queryClient}>
      <ContactsProvider>{children}</ContactsProvider>
    </QueryClientProvider>
  )
  const { result } = renderHook(() => useContacts(), { wrapper })
  it('should render list contacts', async () => {
    await waitFor(() => {
      if (result.current.isLoading) {
        expect(result.current.isLoading).toBeTruthy()
      } else {
        expect(result.current.contacts?.data?.length).toBeGreaterThanOrEqual(1)
      }
    })
  })

  it('should be able to add new contact to the list', () => {
    const contact = {
      name: 'abner',
      phone: '5562993288256'
    }
    act(() => {
      result.current
        .addNewContact(contact)
        .then((response) => expect(response).toBeTruthy())
    })
  })

  it('should remove contact in the first position', async () => {
    await waitFor(() => {
      if (result.current.isLoading) {
        expect(result.current.isLoading).toBeTruthy()
      } else {
        act(() => {
          result.current
            .deleteContact(result.current.contacts?.data[0].id)
            .then((response) => expect(response).toBeTruthy())
        })
      }
    })
  })

  it('should update contact in the first position', async () => {
    await waitFor(() => {
      if (result.current.isLoading) {
        expect(result.current.isLoading).toBeTruthy()
      } else {
        act(() => {
          const contact = {
            name: 'pedro',
            phone: '5562993288292'
          }
          result.current
            .updateContact(result.current.contacts?.data[0].id, contact)
            .then((response) => expect(response).toBeTruthy())
        })
      }
    })
  })
})
