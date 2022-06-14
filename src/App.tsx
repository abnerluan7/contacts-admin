import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout/AuthenticatedLayout'

import AddContact from '@/pages/AddContact/AddContact'
import ContactsList from '@/pages/ContactList/ContactsList'

import { ContactsProvider } from '@/hooks/useContacts'
const queryClient = new QueryClient()
const Root: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactsProvider>
        <AuthenticatedLayout>
          <Routes>
            <Route path='/' element={<ContactsList />} />
            <Route path='/contacts' element={<ContactsList />} />
            <Route path='/add' element={<AddContact />} />
          </Routes>
        </AuthenticatedLayout>
      </ContactsProvider>
    </QueryClientProvider>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )
}

export default App
