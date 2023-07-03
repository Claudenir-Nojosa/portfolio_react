import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt cumque
      quisquam repellendus qui laboriosam, nihil quidem omnis corrupti velit
      eos, molestias nobis perspiciatis reiciendis consequuntur eveniet ex illum
      optio aspernatur?
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=Claudenir-Nojosa&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Claudenir-Nojosa&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
