import { useForm } from 'react-hook-form'

import { schema } from '@/helpers/validators'
import { yupResolver } from '@hookform/resolvers/yup'

import { ContactsData, IContactsData } from '@/types/Contacts'

import { Content } from './styles'

interface MyProps {
  contact?: IContactsData
  submitContactHandle: (data: ContactsData) => void
}

const FormContact: React.FC<MyProps> = ({ contact, submitContactHandle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactsData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: contact ? contact.name : '',
      phone: contact ? contact.phone : ''
    }
  })

  return (
    <Content>
      <form onSubmit={handleSubmit(submitContactHandle)}>
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
    </Content>
  )
}

export default FormContact
