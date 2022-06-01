import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IContactsData } from '@/types/Contacts'

import { useContacts } from '@/hooks/useContacts'

const ContactsList: React.FC = () => {
  const [currentContact, setCurrentContact] = useState<IContactsData | null>(
    null
  )

  const { contacts } = useContacts()

  const setActiveContact = (Contact: IContactsData) => {
    setCurrentContact(Contact)
  }

  return (
    <div>
      <div>
        <h4>Contacts List</h4>

        <ul>
          {contacts?.map((contact, index) => (
            <li onClick={() => setActiveContact(contact)} key={index}>
              {contact.name}
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
