import { css } from 'styled-components'
import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
`

export const Container = styled.View`
  padding: 0 48px;
`

export const LogotypeContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const SloganContainer = styled.View`
  gap: 2px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.PRIMARY_LIGHT};
    font-size: ${theme.fontSizes.MEDIUM};
    color: ${theme.colors.GRAY_3};
  `}
`
