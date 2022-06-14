import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery
} from 'react-query'

import { keys } from '@/helpers/queryKeys'

import ContactDataService from '@/services/ContactService'

import { ContactsData, IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'
interface TypesThisContext {
  isLoading: boolean
  contacts: HttpResponse<IContactsData[]>
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<HttpResponse<IContactsData[], any>, unknown>>
  isSuccess: boolean
  addNewContact: (contact: ContactsData) => Promise<boolean>
  updateContact: (id: number, contact: ContactsData) => Promise<boolean>
  deleteContact: (id: number) => Promise<boolean>
  contact: IContactsData | undefined
  setContact: Dispatch<SetStateAction<IContactsData>>
}

export interface MyProps {
  children?: React.ReactNode
}

const ContactsContext = createContext<TypesThisContext>({} as TypesThisContext)

export const ContactsProvider: React.FC<MyProps> = ({ children }) => {
  const { isLoading, data, refetch, isSuccess } = useQuery<
    HttpResponse<IContactsData[]>
  >(keys.CONTACT_LIST, ContactDataService.getAll)

  const [contact, setContact] = useState<IContactsData | undefined>(undefined)

  const addNewContact = async (contact: ContactsData): Promise<boolean> => {
    return await ContactDataService.create(contact)
      .then(async () => {
        refetch()
        return true
      })
      .catch(() => false)
  }

  const updateContact = async (
    id: number,
    contact: ContactsData
  ): Promise<boolean> => {
    return await ContactDataService.update(id, contact)
      .then(async () => {
        refetch()
        return true
      })
      .catch(() => false)
  }

  const deleteContact = async (id: number): Promise<boolean> => {
    return await ContactDataService.remove(id)
      .then(async () => {
        refetch()
        return true
      })
      .catch(() => false)
  }

  return (
    <ContactsContext.Provider
      value={{
        isLoading,
        contacts: data,
        refetch,
        isSuccess,
        addNewContact,
        updateContact,
        deleteContact,
        contact,
        setContact
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => {
  const useContactsContext = useContext(ContactsContext)

  return useContactsContext
}
