import {
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
import { useSignUp } from './hooks/useSignUp'
import { useNavigators } from '@hooks/useNavigators'
import { Controller } from 'react-hook-form'
import { phoneMask } from 'src/helpers/masks/phone-mask'
import { useEffect } from 'react'
import { useToast } from 'react-native-toast-notifications'

export function SignUp() {
  const toast = useToast()
  const { handleNavigate } = useNavigators()
  const { control, handleSubmit, handleSignUp, errors, isPending, isError, isSuccess, error } =
    useSignUp()

  useEffect(() => {
    if (isSuccess) {
      toast.show('Usuário criado com sucesso!', {
        type: 'success',
        placement: 'top',
      })
    }
  }, [isSuccess, toast])

  useEffect(() => {
    if (isError) {
      toast.show(error?.message || 'Erro ao criar usuário', {
        type: 'danger',
        placement: 'top',
      })
    }
  }, [isError, error, toast])

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
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors && errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                errorMessage={errors && errors?.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Telefone"
                onChangeText={(text) => onChange(phoneMask(text))}
                value={phoneMask(value || '')}
                errorMessage={errors && errors?.phone?.message}
                keyboardType="phone-pad"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Senha"
                type="SECURE"
                onChangeText={onChange}
                value={value}
                errorMessage={errors && errors?.password?.message}
              />
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
                errorMessage={errors && errors?.confirmPassword?.message}
              />
            )}
          />
        </FormContainer>

        <Button
          title="Criar"
          loading={isPending}
          type="SECONDARY"
          disabled={isPending}
          onPress={handleSubmit((data) => handleSignUp(data))}
        />

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
