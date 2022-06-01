import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

import ContactDataService from '@/services/ContactService'

import { IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'
interface TypesThisContext {
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  contacts: IContactsData[]
  setContacts: Dispatch<SetStateAction<IContactsData[]>>
}

interface MyProps {
  children?: React.ReactNode
}

const ContactsContext = createContext<TypesThisContext>({} as TypesThisContext)

export const ContactsProvider: React.FC<MyProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [contacts, setContacts] = useState<IContactsData[]>([])

  useEffect(() => {
    retrieveContacts()
  }, [])

  const retrieveContacts = () => {
    ContactDataService.getAll()
      .then((response: HttpResponse<IContactsData[]>) => {
        setContacts(response.data)
        setIsLoading(false)
      })
      .catch(() => {})
  }

  return (
    <ContactsContext.Provider
      value={{ isLoading, setIsLoading, contacts, setContacts }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => {
  const useContactsContext = useContext(ContactsContext)

  return useContactsContext
}
