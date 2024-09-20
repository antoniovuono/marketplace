import { zodResolver } from '@hookform/resolvers/zod'
import { post } from '@services/http'
import { useUserStore } from '@store/useUserStore'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { AppError } from 'src/helpers/errors'
import {
  authenticateUserSchema,
  authenticateUserSchemaType,
} from 'src/helpers/validations/authenticate-user-schema'

export function useSignIn() {
  const setToken = useUserStore((state) => state.setToken)

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<authenticateUserSchemaType>({
    resolver: zodResolver(authenticateUserSchema),
  })

  const {
    mutate: handleSignIn,
    isPending,
    isError: handleSignInHasError,
    error: handleSignInError,
  } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: async (formData: authenticateUserSchemaType) => {
      const response = await post('/users/session', {
        email: formData.email,
        password: formData.password,
      })

      return setToken(response.data.token)
    },
    onSuccess: () => {
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
    handleSubmit,
    reset,
    isPending,
    handleSignIn,
    handleSignInError,
    handleSignInHasError,
  }
}
