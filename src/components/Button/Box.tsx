import React from 'react'
import { ButtonContainer } from './styles'

interface BoxProps {
  children: React.ReactNode
}

export function Box({ children }: BoxProps) {
  return <ButtonContainer activeOpacity={0.7}>{children}</ButtonContainer>
}
