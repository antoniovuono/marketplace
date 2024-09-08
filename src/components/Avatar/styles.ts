import styled from 'styled-components/native'

type AvatarImageProps = {
  size: number
}

export const AvatarImage = styled.Image<AvatarImageProps>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  border: 3px solid ${({ theme }) => theme.colors.BLUE_LIGHT};
`
