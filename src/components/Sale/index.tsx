import { Container, Price, ProductImage, SaleDetails, Title } from './styles'

export function Sale() {
  return (
    <Container>
      <ProductImage
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />

      <SaleDetails>
        <Title numberOfLines={2}>Perfume Chanel Beonce Aroma Clásico</Title>
        <Price>
          <Price secondary>R$</Price> 1,200.00
        </Price>
      </SaleDetails>
    </Container>
  )
}
