import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import ContactDataService from '@/services/ContactService'

import { IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'

import { TypographyComponent } from '@/components'

import { Container } from './styles'

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.string().required()
  })
  .required()

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<IContactsData>({
    resolver: yupResolver(schema)
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const getContact = (id: number) => {
    ContactDataService.get(id)
      .then((response: HttpResponse<IContactsData>) => {
        setValue('name', response.data.name)
        setValue('phone', response.data.phone)
      })
      .catch(() => {})
  }

  useEffect(() => {
    if (id) getContact(parseInt(id))
  }, [id])

  const updateContact = (data: IContactsData) => {
    ContactDataService.update(parseInt(id), data)
      .then(() => {
        navigate('/contacts')
      })
      .catch(() => {})
  }

  const deleteContact = () => {
    ContactDataService.remove(parseInt(id))
      .then(() => {
        navigate('/contacts')
      })
      .catch(() => {})
  }

  return (
    <Container>
      <TypographyComponent type={'h1'}>Contact</TypographyComponent>
      <form onSubmit={handleSubmit(updateContact)}>
        <div>
          <label htmlFor='name'>name</label>
          <input type='text' id='name' {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor='phone'>phone</label>
          <input type='text' id='phone' {...register('phone')} />
          <p>{errors.phone?.message}</p>
        </div>
        <button type='submit'>Update</button>
      </form>

      <button onClick={deleteContact}>Delete</button>

      <Link to={'/contacts'}>Cancel</Link>
    </Container>
  )
}

export default Contact
