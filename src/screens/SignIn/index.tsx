import {
  Container,
  LogotypeContainer,
  SloganContainer,
  Subtitle,
  FormContainer,
  InputContainer,
  BottomContainer,
  SafeAreaContainer,
} from './styles'
import Logotype from '@assets/logotype.svg'
import Slogan from '@assets/slogan.svg'
import { Button } from '@components/Button'
import { TextInput } from '@components/TextInput'

export function SignIn() {
  return (
    <>
      <SafeAreaContainer>
        <Container>
          <LogotypeContainer>
            <Logotype />
            <SloganContainer>
              <Slogan />
              <Subtitle>Seu espaço de compra e venda</Subtitle>
            </SloganContainer>
          </LogotypeContainer>

          <FormContainer>
            <Subtitle>Acesse sua conta</Subtitle>

            <InputContainer>
              <TextInput placeholder="E-mail" keyboardType="email-address" />
              <TextInput placeholder="Senha" type="SECURE" />
            </InputContainer>
            <Button title="Entrar" loading={false} />
          </FormContainer>
        </Container>
      </SafeAreaContainer>

      <BottomContainer>
        <Subtitle>Acesse sua conta</Subtitle>
        <Button title="Criar conta" type="TERTIARY" loading={false} />
      </BottomContainer>
    </>
  )
}

export default SignIn
