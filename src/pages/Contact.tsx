import React, { useState, useEffect, ChangeEvent } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ContactDataService from '@/services/ContactService'

import { IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'

const Contact: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const initialContactState: IContactsData = {
    id: undefined,
    name: '',
    phone: ''
  }
  const [currentContact, setCurrentContact] =
    useState<IContactsData>(initialContactState)
  const [message, setMessage] = useState<string>('')

  const getContact = (id: number) => {
    ContactDataService.get(id)
      .then((response: HttpResponse<IContactsData>) => {
        setCurrentContact(response.data)
      })
      .catch(() => {})
  }

  useEffect(() => {
    if (id) getContact(parseInt(id))
  }, [id])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCurrentContact({ ...currentContact, [name]: value })
  }

  const updateContact = () => {
    ContactDataService.update(currentContact.id, currentContact)
      .then(() => {
        setMessage('The Contact was updated successfully!')
      })
      .catch(() => {})
  }

  const deleteContact = () => {
    ContactDataService.remove(currentContact.id)
      .then(() => {
        navigate('/Contacts')
      })
      .catch(() => {})
  }

  return (
    <div>
      {currentContact ? (
        <div>
          <h4>Contact</h4>
          <form>
            <div>
              <label htmlFor='name'>name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={currentContact.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='phone'>phone</label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={currentContact.phone}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button onClick={deleteContact}>Delete</button>

          <button type='submit' onClick={updateContact}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Contact...</p>
        </div>
      )}
    </div>
  )
}

export default Contact
