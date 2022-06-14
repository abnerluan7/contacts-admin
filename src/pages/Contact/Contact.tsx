import React, { useCallback } from 'react'
import { AiOutlineCloseCircle, AiOutlineDelete } from 'react-icons/ai'

import { ContactsData } from '@/types/Contacts'

import { FormContact } from '@/components'

import { useContacts } from '@/hooks/useContacts'

import { CloseButton, Container, DeleteButton } from './styles'
const Contact: React.FC = () => {
  const { contact } = useContacts()

  const { updateContact, setContact, deleteContact } = useContacts()

  const updateContactHandle = useCallback(
    (data: ContactsData) => {
      updateContact(contact.id, data)
        .then(() => {
          setContact(undefined)
        })
        .catch(() => {})
    },
    [contact]
  )

  const closeContact = () => {
    setContact(undefined)
  }
  const deleteContactHandle = () => {
    deleteContact(contact.id)
      .then(() => {
        setContact(undefined)
      })
      .catch(() => {})
  }

  return (
    <Container>
      <CloseButton>
        <DeleteButton onClick={deleteContactHandle}>
          <AiOutlineDelete size={38} cursor='pointer' />
        </DeleteButton>
        <AiOutlineCloseCircle
          onClick={closeContact}
          size={38}
          cursor='pointer'
        />
      </CloseButton>
      <FormContact
        submitContactHandle={updateContactHandle}
        contact={contact}
      />
    </Container>
  )
}

export default Contact
