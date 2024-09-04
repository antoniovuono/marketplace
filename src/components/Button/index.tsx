import React from 'react'
import { ButtonContainer, ButtonTitle } from './styles'

export type ButtonColor = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
  title: string
  icon?: React.ReactNode
  type?: 'PRIMARY' | 'SECONDARY'
}

export function Button({ title, icon, type = 'PRIMARY' }: ButtonProps) {
  return (
    <ButtonContainer type={type}>
      {icon}
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  )
}
