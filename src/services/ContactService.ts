import http from '@/infra/http-common'

import { IContactsData } from '@/types/Contacts'
import { HttpResponse } from '@/types/Http'

const getAll = async (): Promise<HttpResponse<IContactsData[]>> => {
  return http.get<IContactsData[]>('/contacts')
}

const get = async (id: number): Promise<HttpResponse<IContactsData>> => {
  return http.get<IContactsData>(`/contacts/${id}`)
}

const create = async (
  data: IContactsData
): Promise<HttpResponse<IContactsData>> => {
  return http.post<IContactsData>('/contacts', data)
}

const update = async (
  id: number,
  data: IContactsData
): Promise<HttpResponse<IContactsData>> => {
  return http.put<any>(`/contacts/${id}`, data)
}

const remove = async (id: number): Promise<HttpResponse<IContactsData>> => {
  return http.delete<any>(`/contacts/${id}`)
}

const contactService = {
  getAll,
  get,
  create,
  update,
  remove
}

export default contactService
