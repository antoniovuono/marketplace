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
import SignIn from '@screens/SignIn'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
  let [fontsLoaded] = useFonts({
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
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SignIn />
    </ThemeProvider>
  )
}
