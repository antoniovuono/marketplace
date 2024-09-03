import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
`

export const LoadingSpinner = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.BLUE_LIGHT,
}))``
