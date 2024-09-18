import { Avatar } from '@components/Avatar'
import { Header, HeaderButtonContainer, SafeArea, UserInfoContainer, UserInfoText } from './styles'
import { Button } from '@components/Button'
import { Plus } from 'lucide-react-native'
import { useTheme } from 'styled-components/native'

export function Home() {
  const { colors } = useTheme()

  return (
    <SafeArea>
      <Header>
        <UserInfoContainer>
          <Avatar size={45} />
          <UserInfoText>
            Boas vindas, {`\n`}
            <UserInfoText isBold>Maria!</UserInfoText>
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
