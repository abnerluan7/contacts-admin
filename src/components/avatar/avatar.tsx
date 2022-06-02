import { Image } from './styles'

interface MyProps {
  url: string
}

const AvatarComponent: React.FC<MyProps> = ({ url }) => {
  return <Image src={url} />
}

export default AvatarComponent
