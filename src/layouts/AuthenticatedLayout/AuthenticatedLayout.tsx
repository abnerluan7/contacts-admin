import React from 'react'
import { Link } from 'react-router-dom'

import { useContacts } from '@/hooks/useContacts'

type Props = {
  children: React.ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
  const { isLoading } = useContacts()
  return (
    <div>
      <nav>
        <div>
          <li>
            <Link to={'/contacts'}>Contacts</Link>
          </li>
          <li>
            <Link to={'/add'}>Add</Link>
          </li>
        </div>
      </nav>
      {isLoading && <p>loading...</p>}
      {!isLoading && <div>{children}</div>}
    </div>
  )
}

export default AuthenticatedLayout
