import { QueryClient, QueryClientProvider } from 'react-query'

import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { ContactsProvider, useContacts, MyProps } from './useContacts'

describe('App Contacts List', () => {
  it('should render list contacts', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: MyProps) => (
      <QueryClientProvider client={queryClient}>
        <ContactsProvider>{children}</ContactsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useContacts(), { wrapper })

    await waitFor(() => {
      if (result.current.isLoading) {
        expect(result.current.isLoading).toBeTruthy()
      } else {
        expect(result.current.contacts?.data?.length).toBeGreaterThanOrEqual(1)
      }
    })
  })
})

describe('Add Contacts to List', () => {
  it('should be able to add new contact to the list', () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: MyProps) => (
      <QueryClientProvider client={queryClient}>
        <ContactsProvider>{children}</ContactsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useContacts(), { wrapper })
    const contact = {
      name: 'abner luan',
      phone: '5562993288256'
    }
    act(() => {
      result.current
        .addNewContact(contact)
        .then((response) => expect(response).toBeTruthy())
    })
  })
})

describe('Remove the first Contact to List', () => {
  it('should remove contact in the first position', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: MyProps) => (
      <QueryClientProvider client={queryClient}>
        <ContactsProvider>{children}</ContactsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useContacts(), { wrapper })

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
})

describe('Update the first Contact to List', () => {
  it('should update contact in the first position', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: MyProps) => (
      <QueryClientProvider client={queryClient}>
        <ContactsProvider>{children}</ContactsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useContacts(), { wrapper })

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
