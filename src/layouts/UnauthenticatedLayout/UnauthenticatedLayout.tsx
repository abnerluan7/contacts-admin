import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
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

      <div>{children}</div>
    </div>
  )
}

export default AuthenticatedLayout
