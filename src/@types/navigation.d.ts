type AuthStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

export type RootStackParamList = AuthStackParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
