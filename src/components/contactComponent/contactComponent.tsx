import { IContactsData } from '@/types/Contacts'

import AvatarComponent from '../avatar/avatar'
import Typography from '../typography/typography'
import { Content, TextContent } from './styles'

interface MyProps {
  contact: IContactsData
}

const ContactComponent: React.FC<MyProps> = ({ contact }) => {
  return (
    <Content>
      <AvatarComponent url={contact.avatar} />
      <TextContent>
        <Typography type='h2'>{contact.name}</Typography>
        <Typography type='h3'>{contact.phone}</Typography>
      </TextContent>
    </Content>
  )
}

export default ContactComponent
