import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

const { Navigator, Screen } = createStackNavigator()

export function AuthNavigator() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  )
}
