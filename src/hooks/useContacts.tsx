import { createContext, useContext } from 'react'
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery
} from 'react-query'

import ContactDataService from '@/services/ContactService'

import { IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'
interface TypesThisContext {
  isLoading: boolean
  contacts: HttpResponse<IContactsData[]>
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<HttpResponse<IContactsData[], any>, unknown>>
}

interface MyProps {
  children?: React.ReactNode
}

const ContactsContext = createContext<TypesThisContext>({} as TypesThisContext)

export const ContactsProvider: React.FC<MyProps> = ({ children }) => {
  const { isLoading, data, refetch } = useQuery<HttpResponse<IContactsData[]>>(
    'getAllContact',
    ContactDataService.getAll
  )

  return (
    <ContactsContext.Provider value={{ isLoading, contacts: data, refetch }}>
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => {
  const useContactsContext = useContext(ContactsContext)

  return useContactsContext
}
