import { H1, H2, H3, Label } from './styles'

enum Type {
  'h1',
  'h2',
  'h3',
  'label'
}

interface MyProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: React.ReactNode
  type: keyof typeof Type
  color?: string
}

const TypographyComponent: React.FC<MyProps> = ({
  children,
  type,
  color,
  ...inputProps
}) => {
  const makeTypography = {
    h1: () => {
      return <H1 color={color}>{children}</H1>
    },
    h2: () => {
      return <H2 color={color}>{children}</H2>
    },
    h3: () => {
      return <H3 color={color}>{children}</H3>
    },
    label: () => {
      return (
        <Label color={color} htmlFor={inputProps.htmlFor}>
          {children}
        </Label>
      )
    }
  }

  const typography = makeTypography[type]
  return typography()
}

export default TypographyComponent
