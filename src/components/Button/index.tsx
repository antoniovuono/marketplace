import React from 'react'
import { ButtonContainer, ButtonLoader, ButtonTitle } from './styles'
import { TouchableOpacityProps } from 'react-native'

export type TButtonColor = 'PRIMARY' | 'SECONDARY'

type ButtonProps = TouchableOpacityProps & {
  title: string
  icon?: React.ReactNode
  type?: TButtonColor
  loading: boolean
}

export function Button({ title, icon, type = 'PRIMARY', loading }: ButtonProps) {
  return (
    <ButtonContainer type={type} activeOpacity={0.7}>
      {loading ? (
        <ButtonLoader />
      ) : (
        <>
          {icon}
          <ButtonTitle>{title}</ButtonTitle>
        </>
      )}
    </ButtonContainer>
  )
}
