import React from 'react'

import { useContacts } from '@/hooks/useContacts'

import { Container } from './styles'

type Props = {
  children: React.ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
  const { isLoading } = useContacts()
  return (
    <Container>
      {isLoading && <p>loading...</p>}
      {!isLoading && <div>{children}</div>}
    </Container>
  )
}

export default AuthenticatedLayout
