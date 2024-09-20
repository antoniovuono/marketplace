import { useForm } from 'react-hook-form'
import { createUserSchema, createUserSchemaType } from 'src/helpers/validations/create-user-schema'
import { useMutation } from '@tanstack/react-query'
import { post } from '@services/http'
import { zodResolver } from '@hookform/resolvers/zod'
import { AppError } from 'src/helpers/errors'

export function useSignUp() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<createUserSchemaType>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    mutate: handleSignUp,
    isPending,
    isError: signUpHasError,
    error: signUpError,
    isSuccess: isSignUpSuccess,
  } = useMutation({
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
      reset()
    },
    onError: (error) => {
      if (error instanceof AppError) {
        throw error
      }

      throw error
    },
  })

  return {
    control,
    errors,
    isPending,
    handleSubmit,
    handleSignUp,
    signUpHasError,
    signUpError,
    isSignUpSuccess,
  }
}
