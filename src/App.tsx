import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout/AuthenticatedLayout'

import AddContact from '@/pages/AddContact'
import Contact from '@/pages/Contact'
import ContactsList from '@/pages/ContactList/ContactsList'

import { ContactsProvider } from '@/hooks/useContacts'

const App: React.FC = () => {
  return (
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
  )
}

export default App
