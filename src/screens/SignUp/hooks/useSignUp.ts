import { useToast } from 'react-native-toast-notifications'
import { useForm } from 'react-hook-form'
import { createUserSchema, createUserSchemaType } from 'src/helpers/validations/create-user-schema'
import { useMutation } from '@tanstack/react-query'
import { post } from '@services/http'
import { zodResolver } from '@hookform/resolvers/zod'

type CreateUserFormProps = {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

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

  const { mutate: handleCreateUser, isPending } = useMutation({
    mutationKey: ['createUser'],
    mutationFn: async (formData: CreateUserFormProps) => {
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
      console.log('react query error post', error)
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
    handleCreateUser,
  }
}
