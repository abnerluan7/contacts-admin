import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContactsData } from '@/types/Contacts'

import { FormContact, TypographyComponent } from '@/components'

import { useContacts } from '@/hooks/useContacts'

import { Container } from './styles'

const Contact: React.FC = () => {
  const { contact } = useContacts()
  const navigate = useNavigate()

  const { updateContact, deleteContact } = useContacts()

  const updateContactHandle = useCallback((data: ContactsData) => {
    updateContact(contact.id, data)
      .then(() => {
        navigate('/')
      })
      .catch(() => {})
  }, [])

  const deleteContactHandle = () => {
    deleteContact(contact.id)
      .then(() => {
        navigate('/')
      })
      .catch(() => {})
  }

  return (
    <Container>
      <TypographyComponent type={'h1'}>Contact</TypographyComponent>
      <FormContact
        contact={contact}
        submitContactHandle={updateContactHandle}
      />

      <button onClick={deleteContactHandle}>Delete</button>
    </Container>
  )
}

export default Contact
