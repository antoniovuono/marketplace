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
} from './styles'
import Logotype from '@assets/logotype.svg'
import { TextInput } from '@components/TextInput'
import { Button } from '@components/Button'

export function SignUp() {
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
            <Avatar size={100} uri="https://avatars.githubusercontent.com/u/7297243?v=4" />
          </AvatarContainer>

          <TextInput placeholder="Nome" />
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Telefone" />
          <TextInput placeholder="Senha" />
          <TextInput placeholder="Confirmar Senha" />

          <Button title="Criar" loading={false} type="SECONDARY" />
        </FormContainer>

        <BottomSectionContainer>
          <GreetingsSubTitle>Já tem uma conta?</GreetingsSubTitle>
          <Button title="Ir para o login" loading={false} type="TERTIARY" />
        </BottomSectionContainer>
      </Container>
    </SafeAreaContainer>
  )
}
