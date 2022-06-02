import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IContactsData } from '@/types/Contacts'

import {
  AvatarComponent,
  CardComponent,
  TypographyComponent
} from '@/components'

import { useContacts } from '@/hooks/useContacts'

import { Container, Content, TextContent } from './styles'

const ContactsList: React.FC = () => {
  const navigate = useNavigate()

  const { contacts } = useContacts()

  const editContact = (contact: IContactsData) => {
    navigate(`/Contacts/${contact.id}`)
  }

  return (
    <Container>
      <TypographyComponent type='h1'>Directory</TypographyComponent>

      {contacts?.map((contact, index) => (
        <CardComponent
          onClick={() => editContact(contact)}
          key={index}
          solid={index % 2 === 0}
        >
          <Content>
            <AvatarComponent url={contact.avatar} />
            <TextContent>
              <TypographyComponent type='h2'>
                {contact.name}
              </TypographyComponent>
              <TypographyComponent type='h3'>
                {contact.phone}
              </TypographyComponent>
            </TextContent>
          </Content>
        </CardComponent>
      ))}
    </Container>
  )
}

export default ContactsList