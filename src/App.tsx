import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route } from 'react-router-dom'

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout/AuthenticatedLayout'

import AddContact from '@/pages/AddContact'
import Contact from '@/pages/Contact/Contact'
import ContactsList from '@/pages/ContactList/ContactsList'

import { ContactsProvider } from '@/hooks/useContacts'
const queryClient = new QueryClient()
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactsProvider>
        <AuthenticatedLayout>
          <Routes>
            <Route path='/' element={<ContactsList />} />
            <Route path='/contacts' element={<ContactsList />} />
            <Route path='/add' element={<AddContact />} />
            <Route path='/contacts/:id' element={<Contact />} />
          </Routes>
        </AuthenticatedLayout>
      </ContactsProvider>
    </QueryClientProvider>
  )
}

export default App
