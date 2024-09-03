import React from 'react'
import SignIn from './src/screens/SignIn'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'
import {
  useFonts,
  Karla_300Light,
  Karla_400Regular,
  Karla_500Medium,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { AppLoading } from './src/components/AppLoading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_300Light,
    Karla_400Regular,
    Karla_500Medium,
    Karla_700Bold,
  })

  return <ThemeProvider theme={theme}>{!fontsLoaded ? <AppLoading /> : <SignIn />}</ThemeProvider>
}
