export type ContactsData = {
  avatar?: string
  createdAt?: string
  name: string
  phone: string
}

export interface IContactsData extends ContactsData {
  id: number
}
