import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { schema } from '@/helpers/validators'
import { yupResolver } from '@hookform/resolvers/yup'

import { ContactsData } from '@/types/Contacts'

import { TypographyComponent } from '@/components'

import { useContacts } from '@/hooks/useContacts'

import { Container } from './styles'
const AddContact: React.FC = () => {
  const navigate = useNavigate()
  const { addNewContact } = useContacts()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactsData>({
    resolver: yupResolver(schema)
  })

  const saveContact = (data: ContactsData) => {
    addNewContact(data)
      .then(() => {
        navigate('/contacts')
      })
      .catch(() => {})
  }

  return (
    <Container>
      <TypographyComponent type={'h1'}>Contact</TypographyComponent>
      <form onSubmit={handleSubmit(saveContact)}>
        <div>
          <label htmlFor='name'>Title</label>
          <input
            type='text'
            required
            name='name'
            placeholder='name'
            {...register('name')}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor='phone'>Description</label>
          <input
            type='text'
            required
            name='phone'
            placeholder='phone'
            {...register('phone')}
          />
          <p>{errors.phone?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <Link to={'/contacts'}>Cancel</Link>
    </Container>
  )
}

export default AddContact
