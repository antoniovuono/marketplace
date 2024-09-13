import { useTheme } from 'styled-components/native'
import {
  ButtonIcon,
  Container,
  ContainerInput,
  ErrorMessage,
  ErrorMessageContainer,
  Input,
} from './styles'
import { Eye, EyeOff } from 'lucide-react-native'
import { TextInputProps } from 'react-native'
import { useState } from 'react'

type TInput = TextInputProps & {
  type?: 'REGULAR' | 'SECURE'
  errorMessage?: string | null
}

export function TextInput({ type = 'REGULAR', errorMessage, ...rest }: TInput) {
  const [showPassword, setShowPassword] = useState(false)

  const { colors } = useTheme()

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <Container>
      <ContainerInput>
        <Input
          {...rest}
          autoCapitalize="none"
          secureTextEntry={type === 'SECURE' && !showPassword ? true : false}
        />

        {type === 'SECURE' && (
          <ButtonIcon activeOpacity={0.7} onPress={handleShowPassword}>
            {showPassword ? (
              <EyeOff size={20} color={colors.GRAY_4} />
            ) : (
              <Eye size={20} color={colors.GRAY_3} />
            )}
          </ButtonIcon>
        )}
      </ContainerInput>
      <ErrorMessageContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorMessageContainer>
    </Container>
  )
}
