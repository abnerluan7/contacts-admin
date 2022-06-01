import React, { useState, ChangeEvent } from 'react'

import ContactDataService from '@/services/ContactService'

import { IContactsData } from '@/types/Contacts'

const AddContact: React.FC = () => {
  const initialContactState: IContactsData = {
    id: undefined,
    name: '',
    phone: ''
  }
  const [contact, setContact] = useState<IContactsData>(initialContactState)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  const saveContact = () => {
    const data = {
      name: contact.name,
      phone: contact.phone
    }

    ContactDataService.create(data)
      .then(() => {})
      .catch(() => {})
  }

  return (
    <div>
      <div>
        <label htmlFor='name'>Title</label>
        <input
          type='text'
          id='name'
          required
          value={contact.name}
          onChange={handleInputChange}
          name='name'
        />
      </div>

      <div>
        <label htmlFor='phone'>Description</label>
        <input
          type='text'
          id='phone'
          required
          value={contact.phone}
          onChange={handleInputChange}
          name='phone'
        />
      </div>

      <button onClick={saveContact}>Submit</button>
    </div>
  )
}

export default AddContact
