import * as yup from 'yup'
export const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.string().required()
  })
  .required()
