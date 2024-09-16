import { z } from 'zod'

export const authenticateUserSchema = z.object({
  email: z
    .string({
      required_error: 'E-mail é obrigatório',
    })
    .email({
      message: 'E-mail inválido',
    }),
  password: z
    .string({
      required_error: 'Senha é obrigatória',
    })
    .min(8, 'A senha deve ter no mínimo 8 caracteres'),
})

export type authenticateUserSchemaType = z.infer<typeof authenticateUserSchema>
