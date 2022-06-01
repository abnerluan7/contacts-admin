import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import AddContact from '@/components/AddContact'
import Contact from '@/components/Contact'
import ContactsList from '@/components/ContactsList'

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <div>
          <li>
            <Link to={'/contacts'}>Contacts</Link>
          </li>
          <li>
            <Link to={'/add'}>Add</Link>
          </li>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path='/' element={<ContactsList />} />
          <Route path='/contacts' element={<ContactsList />} />
          <Route path='/add' element={<AddContact />} />
          <Route path='/contacts/:id' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
