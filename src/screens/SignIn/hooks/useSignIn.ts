import { zodResolver } from '@hookform/resolvers/zod'
import { post } from '@services/http'
import { useUserStore } from '@store/useUserStore'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useToast } from 'react-native-toast-notifications'
import { AppError } from 'src/helpers/errors'
import {
  authenticateUserSchema,
  authenticateUserSchemaType,
} from 'src/helpers/validations/authenticate-user-schema'

export function useSignIn() {
  const toast = useToast()
  const setToken = useUserStore((state) => state.setToken)

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<authenticateUserSchemaType>({
    resolver: zodResolver(authenticateUserSchema),
  })

  const { mutate: handleSignIn, isPending } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: async (formData: authenticateUserSchemaType) => {
      const response = await post('/users/session', {
        email: formData.email,
        password: formData.password,
      })

      return setToken(response.data.token)
    },
    onSuccess: () => {
      toast.show('Usuário logado com sucesso', {
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

      toast.show('Erro ao logar usuário', {
        type: 'danger',
        placement: 'top',
      })
    },
  })

  return { control, errors, handleSubmit, reset, isPending, handleSignIn }
}
