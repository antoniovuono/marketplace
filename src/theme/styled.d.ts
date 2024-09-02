import 'styled-components/native'
import { theme } from '.'

declare module 'styled-components/native' {
  type Theme = typeof theme

  export interface DefaultTheme extends Theme {}
}
