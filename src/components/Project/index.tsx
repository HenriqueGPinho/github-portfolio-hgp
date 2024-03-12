import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, LinkButton } from './styles'

export default function Project() {
  return (
    <Card>
      <Title>Projeto lista de tarefas</Title>
      <Paragraph>Lista de tarefas feita com VueJS</Paragraph>
      <LinkButton>Visualizar</LinkButton>
    </Card>
  )
}
