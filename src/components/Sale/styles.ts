import styled, { css } from 'styled-components/native'

const BORDER_TOP_RADIUS = '6px'

export const Container = styled.View`
  width: 153.5px;
  height: 163px;
  border-top-right-radius: ${BORDER_TOP_RADIUS};
  border-top-left-radius: ${BORDER_TOP_RADIUS};
`

export const ProductImage = styled.Image`
  height: 100px;
  width: 100%;
  border-top-right-radius: ${BORDER_TOP_RADIUS};
  border-top-left-radius: ${BORDER_TOP_RADIUS};
`

export const SaleDetails = styled.View`
  justify-content: center;
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.PRIMARY_REGULAR};
    color: ${theme.colors.GRAY_2};
    font-size: ${theme.fontSizes.SMALL};
  `}
`

export const Price = styled.Text<{ secondary?: boolean }>`
  ${({ theme, secondary }) => css`
    font-family: ${theme.fonts.PRIMARY_BOLD};
    color: ${theme.colors.GRAY_1};
    font-size: ${secondary ? theme.fontSizes.SMALL : theme.fontSizes.MEDIUM};
  `}
`
