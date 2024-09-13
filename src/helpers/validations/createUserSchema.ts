import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string({
    required_error: 'Nome é obrigatório',
  }),
  email: z
    .string({
      required_error: 'E-mail é obrigatório',
    })
    .email({
      message: 'E-mail inválido',
    }),
  phone: z.string({
    required_error: 'Telefone é obrigatório',
  }),
  password: z.string({
    required_error: 'Senha é obrigatória',
  }),
  confirmPassword: z.string({
    required_error: 'Confirmação de senha é obrigatória',
  }),
})

export type createUserSchemaType = z.infer<typeof createUserSchema>
