import React from 'react'
import { ButtonContainer, ButtonTitle } from './styles'

type ButtonProps = {
  title: string
  icon?: React.ReactNode
}

export function Button({ title, icon }: ButtonProps) {
  return (
    <ButtonContainer>
      {icon}
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  )
}
