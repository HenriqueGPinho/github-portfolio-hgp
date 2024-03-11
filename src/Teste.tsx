import styled from 'styled-components'

type ButtonProps = {
  main?: boolean
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.main ? 'green' : 'red')};
`

export default function Teste() {
  return <Button>Ola mundo</Button>
}
