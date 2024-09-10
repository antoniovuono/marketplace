import { Avatar } from '@components/Avatar'
import {
  AvatarContainer,
  BottomSectionContainer,
  Container,
  FormContainer,
  GreetingsSubTitle,
  GreetingsTitle,
  SafeAreaContainer,
  SloganContainer,
  UploadAvatarButton,
} from './styles'
import Logotype from '@assets/logotype.svg'
import { TextInput } from '@components/TextInput'
import { Button } from '@components/Button'
import { PencilLine } from 'lucide-react-native'
import * as FileSystem from 'expo-file-system'
import { useTheme } from 'styled-components/native'
import { useNavigators } from '@navigators/hooks/useNavigators'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

export function SignUp() {
  const [userPhoto, setUserPhoto] = useState<string>('')

  const { colors } = useTheme()
  const { handleNavigate } = useNavigators()

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
          // retornar um toast no lugar
          return console.log('A foto selecionada deve ter no máximo 3 megabytes')
        }

        setUserPhoto(photoURI)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <SafeAreaContainer>
      <Container>
        <SloganContainer>
          <Logotype />

          <GreetingsTitle>Boas vindas!</GreetingsTitle>
          <GreetingsSubTitle>
            Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
          </GreetingsSubTitle>
        </SloganContainer>

        <FormContainer>
          <AvatarContainer>
            <Avatar size={100} uri={userPhoto} />

            <UploadAvatarButton onPress={handleSelectPhoto} activeOpacity={0.7}>
              <PencilLine size={16} color={colors.GRAY_6} />
            </UploadAvatarButton>
          </AvatarContainer>

          <TextInput placeholder="Nome" />
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Telefone" />
          <TextInput placeholder="Senha" type="SECURE" />
          <TextInput placeholder="Confirmar Senha" type="SECURE" />

          <Button title="Criar" loading={false} type="SECONDARY" />
        </FormContainer>

        <BottomSectionContainer>
          <GreetingsSubTitle>Já tem uma conta?</GreetingsSubTitle>
          <Button
            onPress={() => handleNavigate('SignIn')}
            title="Ir para o login"
            loading={false}
            type="TERTIARY"
          />
        </BottomSectionContainer>
      </Container>
    </SafeAreaContainer>
  )
}
