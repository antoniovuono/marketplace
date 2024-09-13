import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import * as FileSystem from 'expo-file-system'
import { useToast } from 'react-native-toast-notifications'
import { useForm } from 'react-hook-form'
import { createUserSchema, createUserSchemaType } from 'src/helpers/validations/createUserSchema'
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
  const [userPhoto, setUserPhoto] = useState<string>('')

  const toast = useToast()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<createUserSchemaType>({
    resolver: zodResolver(createUserSchema),
  })

  async function handleSelectPhoto() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      const photoURI = photoSelected.assets && photoSelected.assets[0].uri

      if (!photoSelected.canceled && photoSelected.assets && photoURI) {
        const photoInformation = (await FileSystem.getInfoAsync(photoURI)) as { size: number }

        if (photoInformation && photoInformation.size / 1024 / 1024 > 5) {
          return toast.show('A imagem deve ter no máximo 5MB', {
            type: 'danger',
            placement: 'top',
          })
        }

        setUserPhoto(photoURI)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const { mutate: handleCreateUser, isPending } = useMutation({
    mutationFn: async (formData: CreateUserFormProps) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return await post('/users', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      })
    },
    onSuccess: () => {
      toast.show('Usuário criado com sucesso', {
        type: 'success',
        placement: 'top',
      })
    },
    onError: (error) => {
      console.log('react query error', error)
      toast.show('Erro ao criar usuário', {
        type: 'danger',
        placement: 'top',
      })
    },
  })

  return {
    userPhoto,
    handleSelectPhoto,
    control,
    handleSubmit,
    handleCreateUser,
    errors,
    isPending,
  }
}
