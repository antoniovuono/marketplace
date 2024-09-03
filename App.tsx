import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'
import {
  useFonts,
  Karla_300Light,
  Karla_400Regular,
  Karla_500Medium,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { AppLoading } from '@components/AppLoading'
import SignIn from '@screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_300Light,
    Karla_400Regular,
    Karla_500Medium,
    Karla_700Bold,
  })

  return <ThemeProvider theme={theme}>{!fontsLoaded ? <AppLoading /> : <SignIn />}</ThemeProvider>
}
