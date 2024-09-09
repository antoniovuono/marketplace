import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'
import {
  useFonts,
  Karla_300Light,
  Karla_400Regular,
  Karla_500Medium,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'react-native'

import { Home } from '@screens/Home'
import { AppNavigator } from '@navigators/index'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_300Light,
    Karla_400Regular,
    Karla_500Medium,
    Karla_700Bold,
  })

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) await SplashScreen.hideAsync()
    }
    prepare()
  }, [fontsLoaded])

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <AppNavigator />
    </ThemeProvider>
  )
}
