import React, { useState, ChangeEvent } from 'react'

import ContactDataService from '@/services/ContactService'

import { IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'

const AddContact: React.FC = () => {
  const initialContactState: IContactsData = {
    id: undefined,
    name: '',
    phone: ''
  }
  const [Contact, setContact] = useState<IContactsData>(initialContactState)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setContact({ ...Contact, [name]: value })
  }

  const saveContact = () => {
    const data = {
      name: Contact.name,
      phone: Contact.phone
    }

    ContactDataService.create(data)
      .then((response: HttpResponse<IContactsData>) => {
        setContact({
          id: response.data.id,
          name: response.data.name,
          phone: response.data.phone
        })
        setSubmitted(true)
      })
      .catch(() => {})
  }

  const newContact = () => {
    setContact(initialContactState)
    setSubmitted(false)
  }

  return (
    <div>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button onClick={newContact}>Add</button>
        </div>
      ) : (
        <div>
          <div>
            <label htmlFor='name'>Title</label>
            <input
              type='text'
              id='name'
              required
              value={Contact.name}
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
              value={Contact.phone}
              onChange={handleInputChange}
              name='phone'
            />
          </div>

          <button onClick={saveContact}>Submit</button>
        </div>
      )}
    </div>
  )
}

export default AddContact
