import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

export default function About() {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragraph color="main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptate sit exercitationem mollitia ratione voluptas voluptates?
        Corrupti voluptas, nesciunt, porro quibusdam aut, sunt eius obcaecati
        error ex in veritatis sequi.
      </Paragraph>
      <div>
        <img src="https://github-readme-stats.vercel.app/api?username=henriquegpinho&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=henriquegpinho&layout=compact&langs_count=7&theme=dracula" />
      </div>
    </section>
  )
}
