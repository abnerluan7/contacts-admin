import { IContactsData } from '@/types/Contacts'

import AvatarComponent from '../avatar/avatar'
import TypographyComponent from '../typography/typography'
import { Content, TextContent } from './styles'

interface MyProps {
  contact: IContactsData
}

const Contact: React.FC<MyProps> = ({ contact }) => {
  return (
    <Content>
      <AvatarComponent url={contact.avatar} />
      <TextContent>
        <TypographyComponent type='h2'>{contact.name}</TypographyComponent>
        <TypographyComponent type='h3'>{contact.phone}</TypographyComponent>
      </TextContent>
    </Content>
  )
}

export default Contact
