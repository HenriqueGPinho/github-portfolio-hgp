import Title from '../../components/Title'
import Project from '../../components/Project'
import { ProjectList } from './styles'

export default function Projects() {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <ProjectList>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </ProjectList>
    </section>
  )
}
