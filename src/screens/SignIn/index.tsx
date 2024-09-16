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
import { useNavigators } from '@hooks/useNavigators'
import { Controller } from 'react-hook-form'
import { useSignIn } from './hooks/useSignIn'

export function SignIn() {
  const { handleNavigate } = useNavigators()
  const { control, errors, isPending, handleSubmit, handleSignIn } = useSignIn()

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
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={value}
                    onChangeText={onChange}
                    errorMessage={errors && errors.email?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    placeholder="Senha"
                    type="SECURE"
                    value={value}
                    onChangeText={onChange}
                    errorMessage={errors && errors.password?.message}
                  />
                )}
              />
            </InputContainer>
            <Button
              title="Entrar"
              loading={isPending}
              disabled={isPending}
              onPress={handleSubmit((data) => handleSignIn(data))}
            />
          </FormContainer>
        </Container>
      </SafeAreaContainer>

      <BottomContainer>
        <Subtitle>Acesse sua conta</Subtitle>
        <Button
          onPress={() => handleNavigate('SignUp')}
          title="Criar conta"
          type="TERTIARY"
          loading={false}
        />
      </BottomContainer>
    </>
  )
}

export default SignIn
