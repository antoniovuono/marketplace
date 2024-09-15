import { z } from 'zod'

export const createUserSchema = z
  .object({
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
    password: z
      .string({
        required_error: 'Senha é obrigatória',
      })
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z
      .string({
        required_error: 'Confirmação de senha é obrigatória',
      })
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type createUserSchemaType = z.infer<typeof createUserSchema>
