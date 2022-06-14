import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ContactsData } from '@/types/Contacts'

import { FormContact, Typography } from '@/components'

import { useContacts } from '@/hooks/useContacts'

import { Container } from './styles'
const AddContact: React.FC = () => {
  const navigate = useNavigate()
  const { addNewContact } = useContacts()

  const saveContact = (data: ContactsData) => {
    addNewContact(data)
      .then(() => {
        navigate('/contacts')
      })
      .catch(() => {})
  }

  return (
    <Container>
      <Typography type={'h1'}>Contact</Typography>
      <FormContact submitContactHandle={saveContact} />
    </Container>
  )
}

export default AddContact
