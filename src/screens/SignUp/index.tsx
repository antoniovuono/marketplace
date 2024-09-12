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
import { useTheme } from 'styled-components/native'
import { useSignUp } from './hooks/useSignUp'
import { useNavigators } from '@hooks/useNavigators'
import { Controller } from 'react-hook-form'

export function SignUp() {
  const { colors } = useTheme()
  const { handleNavigate } = useNavigators()
  const { userPhoto, handleSelectPhoto, control, handleSubmit, handleCreateUser } = useSignUp()

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

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput placeholder="Nome" onChangeText={onChange} value={value} />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput placeholder="E-mail" onChangeText={onChange} value={value} />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <TextInput placeholder="Telefone" onChangeText={onChange} value={value} />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput placeholder="Senha" type="SECURE" onChangeText={onChange} value={value} />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Confirmar Senha"
                type="SECURE"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Button
            title="Criar"
            loading={false}
            type="SECONDARY"
            onPress={handleSubmit(handleCreateUser)}
          />
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
