import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IContactsData } from '@/types/Contacts'

import {
  AvatarComponent,
  CardComponent,
  TypographyComponent
} from '@/components'

import { useContacts } from '@/hooks/useContacts'

const ContactsList: React.FC = () => {
  const navigate = useNavigate()

  const { contacts } = useContacts()

  const editContact = (contact: IContactsData) => {
    navigate(`/Contacts/${contact.id}`)
  }

  return (
    <div>
      <TypographyComponent type='h1'>Directory</TypographyComponent>

      <div>
        {contacts?.map((contact, index) => (
          <CardComponent
            onClick={() => editContact(contact)}
            key={index}
            solid={index % 2 === 0}
          >
            <AvatarComponent url={contact.avatar} />
            <TypographyComponent type='h2'>{contact.name}</TypographyComponent>
            <TypographyComponent type='h3'>{contact.phone}</TypographyComponent>
          </CardComponent>
        ))}
      </div>
    </div>
  )
}

export default ContactsList
