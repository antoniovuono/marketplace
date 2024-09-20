import { Avatar } from '@components/Avatar'
import { Header, SafeArea, UserInfoContainer, UserInfoText } from './styles'
import { Button } from '@components/Button'
import { Plus } from 'lucide-react-native'
import { useTheme } from 'styled-components/native'
import { useHome } from './hooks/useHome'
import { useToast } from 'react-native-toast-notifications'

export function Home() {
  const { colors } = useTheme()
  const toast = useToast()
  const { user, isUserDataError, userDataError } = useHome()

  if (isUserDataError) {
    toast.show(userDataError?.message || 'Erro ao buscar os dados do usuário!', {
      type: 'danger',
      placement: 'top',
    })
  }

  return (
    <SafeArea>
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
    </SafeArea>
  )
}
