import { AvatarImage } from './styles'
import BlankAvatar from '@assets/avatar.png'

type AvatarProps = {
  uri?: string
  size: number
}

export function Avatar({ uri, size }: AvatarProps) {
  return <AvatarImage size={size} source={!uri ? BlankAvatar : { uri: uri }} resizeMode="cover" />
}
