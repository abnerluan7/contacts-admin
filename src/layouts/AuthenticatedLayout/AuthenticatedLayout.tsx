import React from 'react'
// import { Link } from 'react-router-dom'

import { useContacts } from '@/hooks/useContacts'

import { Container } from './styles'

type Props = {
  children: React.ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
  const { isLoading } = useContacts()
  return (
    <Container>
      {/* <nav>
        <div>
          <li>
            <Link to={'/contacts'}>Contacts</Link>
          </li>
          <li>
            <Link to={'/add'}>Add</Link>
          </li>
        </div>
      </nav> */}
      {isLoading && <p>loading...</p>}
      {!isLoading && <div>{children}</div>}
    </Container>
  )
}

export default AuthenticatedLayout
