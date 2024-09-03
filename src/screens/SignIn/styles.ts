import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.PRIMARY_LIGHT};
  color: ${({ theme }) => theme.colors.BLUE_LIGHT};
`
