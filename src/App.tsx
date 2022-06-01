import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout/AuthenticatedLayout'

import AddContact from '@/components/AddContact'
import Contact from '@/components/Contact'
import ContactsList from '@/components/ContactsList'

const App: React.FC = () => {
  return (
    <AuthenticatedLayout>
      <Routes>
        <Route path='/' element={<ContactsList />} />
        <Route path='/contacts' element={<ContactsList />} />
        <Route path='/add' element={<AddContact />} />
        <Route path='/contacts/:id' element={<Contact />} />
      </Routes>
    </AuthenticatedLayout>
  )
}

export default App
