import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { SidebarContainer, Description, ThemeButton } from './styles'

type Props = {
  toggleTheme: () => void
}

export default function Sidebar(props: Props) {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Henrique Pinho</Title>
        <Paragraph fontSize={16}>HenriqueGPinho</Paragraph>
        <Description fontSize={12} color={'main'}>
          Engenheiro Front-End
        </Description>
        <ThemeButton onClick={props.toggleTheme}>Trocar tema</ThemeButton>
      </SidebarContainer>
    </aside>
  )
}
