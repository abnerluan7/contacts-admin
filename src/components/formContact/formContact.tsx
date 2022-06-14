import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { schema } from '@/helpers/validators'
import { yupResolver } from '@hookform/resolvers/yup'

import { ContactsData } from '@/types/Contacts'

import { useContacts } from '@/hooks/useContacts'

import ButtonComponent from '../button/button'
import Typography from '../typography/typography'
import { Content, Form, Input } from './styles'

interface MyProps {
  submitContactHandle: (data: ContactsData) => void
}

const FormContact: React.FC<MyProps> = ({ submitContactHandle }) => {
  const { contact } = useContacts()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<ContactsData>({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (contact) {
      setValue('name', contact.name)
      setValue('phone', contact.phone)
    }
  }, [contact])

  return (
    <Content>
      <Form onSubmit={handleSubmit(submitContactHandle)}>
        <div>
          <Typography type='label' htmlFor='name'>
            Name
          </Typography>
          <Input type='text' id='name' required {...register('name')} />

          {errors.name && (
            <Typography type='h3'>{errors.name?.message}</Typography>
          )}
        </div>
        <div>
          <Typography type='label' htmlFor='phone'>
            Phone
          </Typography>
          <Input type='text' id='phone' required {...register('phone')} />
          {errors.phone && (
            <Typography type='h3'>{errors.phone?.message}</Typography>
          )}
        </div>
        <ButtonComponent type='submit' text='Update' />
      </Form>
    </Content>
  )
}

export default FormContact
