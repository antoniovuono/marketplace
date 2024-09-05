import { css } from 'styled-components'
import styled from 'styled-components/native'
import { TButtonColor } from '.'

type ButtonContainerProps = {
  type: TButtonColor
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.colors.BLUE_LIGHT : theme.colors.GRAY_1};
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  flex-direction: row;
  height: 42px;
`

export const ButtonTitle = styled.Text`
  margin-left: 8px;
  ${({ theme }) =>
    theme &&
    css`
      font-size: ${theme.fontSizes.MEDIUM};
      font-family: ${theme.fonts.PRIMARY_BOLD};
      color: ${theme.colors.GRAY_7};
    `}
`

export const ButtonLoader = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'small',
  color: theme.colors.GRAY_7,
}))``
