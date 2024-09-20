import { zodResolver } from '@hookform/resolvers/zod'
import { post } from '@services/http'
import { useUserStore } from '@store/useUserStore'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
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

  async function authenticateUser(formData: authenticateUserSchemaType) {
    const response = await post('/users/session', {
      email: formData.email,
      password: formData.password,
    })

    return setToken(response.data.token)
  }

  const {
    mutate: handleSignIn,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: authenticateUser,
    onSuccess: () => {
      reset()
    },
    onError: (error) => {
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
    isError,
    error,
  }
}
