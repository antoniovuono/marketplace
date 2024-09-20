import { useForm } from 'react-hook-form'
import { createUserSchema, createUserSchemaType } from 'src/helpers/validations/create-user-schema'
import { useMutation } from '@tanstack/react-query'
import { post } from '@services/http'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSignUp() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<createUserSchemaType>({
    resolver: zodResolver(createUserSchema),
  })

  async function createUser(formData: createUserSchemaType) {
    return await post('/users', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    })
  }

  const {
    mutate: handleSignUp,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: createUser,
    onSuccess: async () => {
      reset()
    },
    onError: (error) => {
      throw error
    },
  })

  return {
    control,
    errors,
    isPending,
    handleSubmit,
    handleSignUp,
    isError,
    error,
    isSuccess,
  }
}
