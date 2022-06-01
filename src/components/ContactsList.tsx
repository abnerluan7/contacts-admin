import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ContactDataService from '@/services/ContactService'

import { IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'

const ContactsList: React.FC = () => {
  const [Contacts, setContacts] = useState<IContactsData[]>([])
  const [currentContact, setCurrentContact] = useState<IContactsData | null>(
    null
  )

  useEffect(() => {
    retrieveContacts()
  }, [])

  const retrieveContacts = () => {
    ContactDataService.getAll()
      .then((response: HttpResponse<IContactsData[]>) => {
        setContacts(response.data)
      })
      .catch(() => {})
  }

  const setActiveContact = (Contact: IContactsData) => {
    setCurrentContact(Contact)
  }

  return (
    <div>
      <div>
        <h4>Contacts List</h4>

        <ul>
          {Contacts?.map((Contact, index) => (
            <li onClick={() => setActiveContact(Contact)} key={index}>
              {Contact.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {currentContact ? (
          <div>
            <h4>Contact</h4>
            <div>
              <label>
                <strong>Title: </strong>
              </label>
              {currentContact.name}
            </div>
            <div>
              <label>
                <strong>Description: </strong>
              </label>
              {currentContact.phone}
            </div>

            <Link to={`/Contacts/${currentContact.id}`}>Edit</Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Contact...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactsList
