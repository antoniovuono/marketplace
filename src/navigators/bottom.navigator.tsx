import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomNavigator() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
