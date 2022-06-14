import { IContactsData } from '@/types/Contacts'

import { CardComponent, ContactComponent, Typography } from '@/components'

import { useContacts } from '@/hooks/useContacts'

import Contact from '../Contact/Contact'
import { Container, Content, Edit, List } from './styles'

const ContactsList: React.FC = () => {
  const { contacts, setContact, contact } = useContacts()

  const showContact = (contact: IContactsData) => {
    setContact(contact)
  }

  return (
    <Container>
      <Typography type='h1'>Contact List</Typography>

      <Content>
        <List active={!!contact}>
          {contacts.data?.map((contact, index) => (
            <CardComponent
              onClick={() => showContact(contact)}
              key={index}
              solid={index % 2 === 0}
            >
              <ContactComponent contact={contact} />
            </CardComponent>
          ))}
        </List>
        <Edit active={!!contact}>
          <Contact />
        </Edit>
      </Content>
    </Container>
  )
}

export default ContactsList
