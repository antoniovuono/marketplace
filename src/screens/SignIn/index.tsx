import { Container, SafeArea, LogotypeContainer, SloganContainer, Subtitle } from './styles'
import Logotype from '@assets/logotype.svg'
import Slogan from '@assets/slogan.svg'
import { Button } from '@components/Button'

export function SignIn() {
  return (
    <SafeArea>
      <Container>
        <LogotypeContainer>
          <Logotype />
          <SloganContainer>
            <Slogan />
            <Subtitle>Seu espaço de compra e venda</Subtitle>
          </SloganContainer>
        </LogotypeContainer>

        <Button title="Entrar" />
      </Container>
    </SafeArea>
  )
}

export default SignIn
