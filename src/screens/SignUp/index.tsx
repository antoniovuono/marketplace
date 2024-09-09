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
import { useNavigators } from '@navigators/hooks/useNavigators'

export function SignUp() {
  const { colors } = useTheme()
  const { handleNavigate } = useNavigators()

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
            <Avatar size={100} />

            <UploadAvatarButton activeOpacity={0.7}>
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
