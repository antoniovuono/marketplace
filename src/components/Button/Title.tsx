import { ButtonTitle } from './styles'

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return <ButtonTitle>{title}</ButtonTitle>
}
