import { AvatarImage } from './styles'

type AvatarProps = {
  uri: string
  size: number
}

export function Avatar({ uri, size }: AvatarProps) {
  return <AvatarImage size={size} source={{ uri: uri }} />
}
