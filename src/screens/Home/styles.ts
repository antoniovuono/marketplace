import styled, { css } from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_6};
`
export const Container = styled.View`
  padding: 0 24px;
`

export const Header = styled.View`
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
export const UserSalesDetailsSection = styled.View`
  margin-top: 33px;
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.PRIMARY_REGULAR};
    color: ${theme.colors.GRAY_3};
    font-size: ${theme.fontSizes.SMALL};
  `}
`

export const UserSalesDetailsWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT_OPACITY};
  height: 66px;
  border-radius: 6px;
  padding: 12px 16px;
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserActivesSalesContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const ActiveSalesContainer = styled.View`
  padding: 0 16px;
`

export const ActiveSalesLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.PRIMARY_BOLD};
    font-size: ${theme.fontSizes.LARGE};
    color: ${theme.colors.GRAY_2};
  `}
`

export const SalesDetailsText = styled.Text<{ secondary?: boolean }>`
  ${({ theme, secondary }) => css`
    font-family: ${secondary ? theme.fonts.PRIMARY_BOLD : theme.fonts.PRIMARY_REGULAR};
    font-size: ${theme.fontSizes.LIGHT};
    color: ${secondary ? theme.colors.BLUE : theme.colors.GRAY_3};
    margin-right: 8px;
  `}
`

export const MySalesContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`

export const SearchSection = styled.View`
  margin-top: 32px;
`
export const SearchContainer = styled.View`
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const SearchInput = styled.TextInput`
  padding: 12px;
  width: 75%;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  padding: 5px 12px;
  gap: 5px;
  width: 25%;
  align-items: center;
`

export const VerticalDivider = styled.View`
  width: 1px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.GRAY_5};
`

export const InteractSalesButton = styled.TouchableOpacity`
  padding: 5px;
`
export const SalesListSection = styled.View`
  margin-top: 24px;
`
