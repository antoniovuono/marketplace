import { useNavigation } from '@react-navigation/native'

export function useNavigators() {
  const navigation = useNavigation()

  function handleNavigate(params: keyof ReactNavigation.RootParamList) {
    navigation.navigate(params)
  }

  return {
    handleNavigate,
  }
}
