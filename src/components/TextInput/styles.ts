import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  padding: 2px 0;
  justify-content: center;
`

export const ContainerInput = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  height: 45px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.GRAY_4,
}))`
  padding: 5px;
  width: 90%;

  ${({ theme }) =>
    theme &&
    css`
      font-size: ${theme.fontSizes.MEDIUM};
      color: ${theme.colors.GRAY_4};
      font-family: ${theme.fonts.PRIMARY_REGULAR};
    `}
`
export const ButtonIcon = styled.TouchableOpacity`
  padding: 0px 2px;
`

export const ErrorMessageContainer = styled.View`
  height: 18px;
  justify-content: center;
`

export const ErrorMessage = styled.Text`
  margin-left: 5px;
  margin-top: 4px;

  ${({ theme }) =>
    theme &&
    css`
      font-size: ${theme.fontSizes.LIGHT};
      color: ${theme.colors.BLUE_LIGHT};
      font-family: ${theme.fonts.PRIMARY_REGULAR};
    `}
`
