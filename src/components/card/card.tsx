import { Card } from './styles'

interface MyProps {
  children?: React.ReactNode
  onClick: () => void
  solid: boolean
}

const CardComponent: React.FC<MyProps> = ({ children, onClick, solid }) => {
  return (
    <Card onClick={onClick} solid={solid}>
      {children}
    </Card>
  )
}

export default CardComponent
