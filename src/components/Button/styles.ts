import { css } from 'styled-components'
import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLUE};
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
`

export const ButtonTitle = styled.Text`
  ${({ theme }) =>
    theme &&
    css`
      font-size: ${theme.fontSizes.MEDIUM};
      font-family: ${theme.fonts.PRIMARY_BOLD};
      color: ${theme.colors.GRAY_7};
    `}
`
