import styled, { css } from 'styled-components/native'

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_6};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

export const Container = styled.View`
  flex: 1;
  padding: 0 48px;
  justify-content: space-around;
`

export const LogotypeContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const SloganContainer = styled.View`
  gap: 2px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.PRIMARY_LIGHT};
    font-size: ${theme.fontSizes.SMALL};
    color: ${theme.colors.GRAY_3};
  `}
`

export const FormContainer = styled.View`
  align-items: center;
  width: 100%;
`

export const InputContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 14px;
`

export const BottomContainer = styled.View`
  height: 25%;
  padding: 0 48px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  gap: 16px;
`
