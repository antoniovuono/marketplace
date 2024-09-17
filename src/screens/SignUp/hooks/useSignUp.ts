import { useToast } from 'react-native-toast-notifications'
import { useForm } from 'react-hook-form'
import { createUserSchema, createUserSchemaType } from 'src/helpers/validations/create-user-schema'
import { useMutation } from '@tanstack/react-query'
import { post } from '@services/http'
import { zodResolver } from '@hookform/resolvers/zod'
import { AppError } from 'src/helpers/errors'

export function useSignUp() {
  const toast = useToast()
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<createUserSchemaType>({
    resolver: zodResolver(createUserSchema),
  })

  const { mutate: handleSignUp, isPending } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: async (formData: createUserSchemaType) => {
      return await post('/users', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      })
    },
    onSuccess: async () => {
      toast.show('Usuário criado com sucesso', {
        type: 'success',
        placement: 'top',
      })
      reset()
    },
    onError: (error) => {
      if (error instanceof AppError) {
        return toast.show(error.message, {
          type: 'danger',
          placement: 'top',
        })
      }

      toast.show('Erro ao criar usuário', {
        type: 'danger',
        placement: 'top',
      })
    },
  })

  return {
    control,
    errors,
    isPending,
    handleSubmit,
    handleSignUp,
  }
}
