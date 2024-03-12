import { PStyle } from './styles'

export type Props = {
  children: string
  color?: string
  fontSize?: number
}

export default function Paragraph(props: Props) {
  return (
    <PStyle fontSize={props.fontSize} color={props.color}>
      {props.children}
    </PStyle>
  )
}
