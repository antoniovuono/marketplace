import { css } from 'styled-components'
import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_6};
`

export const Header = styled.View`
  padding: 5px 24px;
  flex-direction: row;
  justify-content: space-between;
`
export const UserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const UserInfoText = styled.Text<{ isBold?: true }>`
  margin-left: 10px;
  ${({ theme, isBold }) =>
    theme &&
    css`
      font-size: ${theme.fontSizes.MEDIUM};
      color: ${theme.colors.GRAY_1};
      font-family: ${isBold ? theme.fonts.PRIMARY_BOLD : theme.fonts.PRIMARY_REGULAR};
    `}
`
