import {
  Container,
  GreetingsSubTitle,
  GreetingsTitle,
  SafeAreaContainer,
  SloganContainer,
} from './styles'
import Logotype from '@assets/logotype.svg'

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
      </Container>
    </SafeAreaContainer>
  )
}
