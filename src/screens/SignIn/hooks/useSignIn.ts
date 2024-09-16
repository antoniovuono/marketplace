import { zodResolver } from '@hookform/resolvers/zod'
import { post } from '@services/http'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useToast } from 'react-native-toast-notifications'
import {
  authenticateUserSchema,
  authenticateUserSchemaType,
} from 'src/helpers/validations/authenticate-user-schema'

export function useSignIn() {
  const toast = useToast()

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
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return await post('/users/session', {
        email: formData.email,
        password: formData.password,
      })
    },
    onSuccess: () => {
      toast.show('Usuário logado com sucesso', {
        type: 'success',
        placement: 'top',
      })
      reset()
    },
    onError: () => {
      toast.show('Erro ao logar usuário', {
        type: 'danger',
        placement: 'top',
      })
    },
  })

  return { control, errors, handleSubmit, reset, isPending, handleSignIn }
}
