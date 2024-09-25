import { Avatar } from '@components/Avatar'
import {
  ActiveSalesContainer,
  ActiveSalesLabel,
  ButtonsContainer,
  Container,
  Header,
  InteractSalesButton,
  MySalesContainer,
  SafeArea,
  SalesDetailsText,
  SearchContainer,
  SearchInput,
  SearchSection,
  SectionTitle,
  UserActivesSalesContainer,
  UserInfoContainer,
  UserInfoText,
  UserSalesDetailsSection,
  UserSalesDetailsWrapper,
  VerticalDivider,
} from './styles'
import { Button } from '@components/Button'
import { ArrowRight, Plus, Search, SlidersHorizontal, Tag } from 'lucide-react-native'
import { useTheme } from 'styled-components/native'
import { useHome } from './hooks/useHome'
import { useEffect } from 'react'
import { useToast } from 'react-native-toast-notifications'
import { TextInput } from '@components/TextInput'

export function Home() {
  const { colors } = useTheme()
  const toast = useToast()
  const { user, isUserError, fetchUserDataError } = useHome()

  useEffect(() => {
    if (isUserError) {
      toast.show(fetchUserDataError?.message || 'Erro ao buscar dados do usuário', {
        type: 'danger',
        placement: 'top',
      })
    }
  }, [isUserError, fetchUserDataError, toast])

  return (
    <>
      <SafeArea>
        <Container>
          <Header>
            <UserInfoContainer>
              <Avatar size={45} />
              <UserInfoText>
                Boas vindas, {`\n`}
                <UserInfoText isBold>{user?.name}!</UserInfoText>
              </UserInfoText>
            </UserInfoContainer>

            <Button
              title="Criar anúncio"
              loading={false}
              type="SECONDARY"
              icon={<Plus color={colors.GRAY_6} size={16} />}
              style={{ width: 139 }}
            />
          </Header>

          <UserSalesDetailsSection>
            <SectionTitle>Seus produtos anunciados para venda</SectionTitle>

            <UserSalesDetailsWrapper>
              <UserActivesSalesContainer>
                <Tag color={colors.BLUE} size={22} />

                <ActiveSalesContainer>
                  <ActiveSalesLabel>4</ActiveSalesLabel>
                  <SalesDetailsText>anúncios ativos</SalesDetailsText>
                </ActiveSalesContainer>
              </UserActivesSalesContainer>

              <MySalesContainer>
                <SalesDetailsText secondary>Meus anúncios</SalesDetailsText>
                <ArrowRight color={colors.BLUE} size={16} />
              </MySalesContainer>
            </UserSalesDetailsWrapper>
          </UserSalesDetailsSection>

          <SearchSection>
            <SectionTitle>Compre produtos variados</SectionTitle>

            <SearchContainer>
              <SearchInput placeholder="Buscar anúncio" autoCapitalize="none" />

              <ButtonsContainer>
                <InteractSalesButton onPress={() => console.log('search sale')}>
                  <Search size={20} color={colors.GRAY_2} />
                </InteractSalesButton>

                <VerticalDivider />

                <InteractSalesButton onPress={() => console.log('filter sales')}>
                  <SlidersHorizontal size={20} color={colors.GRAY_2} />
                </InteractSalesButton>
              </ButtonsContainer>
            </SearchContainer>
          </SearchSection>
        </Container>
      </SafeArea>
    </>
  )
}
