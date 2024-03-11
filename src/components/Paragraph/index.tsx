import { PStyle } from './styles'

export type Props = {
  children: string
  color?: string
}

export default function Paragraph(props: Props) {
  return <PStyle color={props.color}>{props.children}</PStyle>
}
