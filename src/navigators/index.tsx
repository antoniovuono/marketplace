import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigator } from './auth.navigator'

export function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}
