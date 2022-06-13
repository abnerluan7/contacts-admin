import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IContactsData } from '@/types/Contacts'

import { CardComponent, Contact, TypographyComponent } from '@/components'

import { useContacts } from '@/hooks/useContacts'

import { Container } from './styles'

const ContactsList: React.FC = () => {
  const navigate = useNavigate()

  const { contacts, setContact } = useContacts()

  const editContact = (contact: IContactsData) => {
    setContact(contact)
    navigate(`/contact`)
  }

  return (
    <Container>
      <TypographyComponent type='h1'>Contact List</TypographyComponent>

      {contacts.data?.map((contact, index) => (
        <CardComponent
          onClick={() => editContact(contact)}
          key={index}
          solid={index % 2 === 0}
        >
          <Contact contact={contact} />
        </CardComponent>
      ))}
    </Container>
  )
}

export default ContactsList
