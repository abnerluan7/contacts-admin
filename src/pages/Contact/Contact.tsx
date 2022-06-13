import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { schema } from '@/helpers/validators'
import { yupResolver } from '@hookform/resolvers/yup'

import { ContactsData } from '@/types/Contacts'

import { TypographyComponent } from '@/components'

import { useContacts } from '@/hooks/useContacts'

import { Container } from './styles'

const Contact: React.FC = () => {
  const { contact } = useContacts()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactsData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: contact.name,
      phone: contact.phone
    }
  })
  const navigate = useNavigate()

  const { updateContact, deleteContact } = useContacts()

  const updateContactHandle = (data: ContactsData) => {
    updateContact(contact.id, data)
      .then(() => {
        navigate('/')
      })
      .catch(() => {})
  }

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
      <form onSubmit={handleSubmit(updateContactHandle)}>
        <div>
          <label htmlFor='name'>name</label>
          <input type='text' id='name' required {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor='phone'>phone</label>
          <input type='text' id='phone' required {...register('phone')} />
          <p>{errors.phone?.message}</p>
        </div>
        <button type='submit'>Update</button>
      </form>

      <button onClick={deleteContactHandle}>Delete</button>
    </Container>
  )
}

export default Contact
