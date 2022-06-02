import React from 'react'

import { AddButton } from '@/components'

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
      <AddButton />
    </Container>
  )
}

export default AuthenticatedLayout
