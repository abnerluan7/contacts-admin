import { theme } from '@/layouts/theme'

import TypographyComponent from '../typography/typography'
import { Button } from './styles'

type MyProps = {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const ButtonComponent = ({ text, onClick, disabled, type }: MyProps) => {
  return (
    <Button onClick={onClick} disabled={disabled} type={type}>
      <TypographyComponent color={theme.palette.background.default} type='h1'>
        {text}
      </TypographyComponent>
    </Button>
  )
}

export default ButtonComponent
