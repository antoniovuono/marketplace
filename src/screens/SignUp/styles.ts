import styled, { css } from 'styled-components/native'

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_6};
`

export const Container = styled.View`
  flex: 1;
  padding: 0 48px;
  justify-content: space-around;
`

export const SloganContainer = styled.View`
  align-items: center;
  gap: 8px;
`

export const GreetingsTitle = styled.Text`
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.PRIMARY_BOLD};
      font-size: ${theme.fontSizes.LARGE};
      color: ${theme.colors.GRAY_1};
    `}
`

export const GreetingsSubTitle = styled.Text`
  text-align: center;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.PRIMARY_REGULAR};
      font-size: ${theme.fontSizes.SMALL};
      color: ${theme.colors.GRAY_2};
    `}
`

export const AvatarContainer = styled.View`
  align-items: center;
`

export const FormContainer = styled.View`
  gap: 16px;
  width: 100%;
`
export const BottomSectionContainer = styled.View`
  gap: 16px;
`
