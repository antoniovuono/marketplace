import { useTheme } from 'styled-components/native'
import { ButtonIcon, ContainerInput, Input } from './styles'
import { Eye, EyeOff } from 'lucide-react-native'
import { TextInputProps } from 'react-native'
import { useState } from 'react'

type TInput = TextInputProps & {
  type?: 'REGULAR' | 'SECURE'
}

export function TextInput({ type = 'REGULAR', ...rest }: TInput) {
  const [showPassword, setShowPassword] = useState(false)

  const { colors } = useTheme()

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <ContainerInput>
      <Input
        {...rest}
        autoCapitalize="none"
        maxLength={24}
        secureTextEntry={type === 'SECURE' && showPassword ? true : false}
      />

      {type === 'SECURE' && (
        <ButtonIcon activeOpacity={0.7} onPress={handleShowPassword}>
          {showPassword ? (
            <Eye size={20} color={colors.GRAY_3} />
          ) : (
            <EyeOff size={20} color={colors.GRAY_4} />
          )}
        </ButtonIcon>
      )}
    </ContainerInput>
  )
}
