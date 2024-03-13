import styled from 'styled-components'
import { Props } from '.'

export const PStyle = styled.p<Props>`
  color: ${(props) =>
    props.color === 'main'
      ? props.theme.mainColor
      : props.theme.secondaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  line-height: 22px;
`
