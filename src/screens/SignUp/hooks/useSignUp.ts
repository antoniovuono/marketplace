import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import * as FileSystem from 'expo-file-system'
import { useToast } from 'react-native-toast-notifications'
import { useForm } from 'react-hook-form'
import { createUserSchemaType } from 'src/helpers/validations/createUserSchema'
import { useMutation } from '@tanstack/react-query'
import { post } from '@services/http'

type CreateUserProps = {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export function useSignUp() {
  const [userPhoto, setUserPhoto] = useState<string>('')

  const toast = useToast()
  const { control, handleSubmit } = useForm<createUserSchemaType>()

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
          })
        }

        setUserPhoto(photoURI)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      return await post('/users')
    },
  })

  async function handleCreateUser(data: CreateUserProps) {
    try {
      console.log('data', data)
      // await mutateAsync()
    } catch (error) {
      console.log('error', error)
    }
  }

  return {
    userPhoto,
    handleSelectPhoto,
    control,
    handleSubmit,
    handleCreateUser,
  }
}
