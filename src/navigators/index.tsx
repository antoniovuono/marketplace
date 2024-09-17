import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigator } from './auth.navigator'
import { useUserStore } from '@store/useUserStore'
import { BottomNavigator } from './bottom.navigator'

export function AppNavigator() {
  const token = useUserStore((state) => state.authToken)

  return (
    <NavigationContainer>{!token ? <AuthNavigator /> : <BottomNavigator />}</NavigationContainer>
  )
}
