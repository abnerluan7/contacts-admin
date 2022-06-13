import { AiOutlineUserAdd, AiOutlineUnorderedList } from 'react-icons/ai'
import { useNavigate, useLocation } from 'react-router-dom'

import { Button } from './styles'

const AddButton = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const newContact = () => {
    navigate(pathname === '/add' ? '/contacts' : '/add')
  }
  return (
    <Button onClick={newContact}>
      {pathname === '/' ? <AiOutlineUserAdd /> : <AiOutlineUnorderedList />}
    </Button>
  )
}

export default AddButton
