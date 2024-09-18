import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home'
import { useUserStore } from '@store/useUserStore'
import { HomeIcon, LogOutIcon } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomNavigator() {
  const removeToken = useUserStore((state) => state.removeToken)

  const { colors } = useTheme()

  const iconSize = 24

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.GRAY_2,
        tabBarInactiveTintColor: colors.GRAY_4,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon stroke={color} width={iconSize} height={iconSize} />,
        }}
      />

      <Screen
        name="SignOut"
        options={{
          tabBarIcon: () => (
            <TouchableOpacity onPress={removeToken}>
              <LogOutIcon color={colors.WARNING} width={iconSize} height={iconSize} />
            </TouchableOpacity>
          ),
        }}
      >
        {() => null}
      </Screen>
    </Navigator>
  )
}
