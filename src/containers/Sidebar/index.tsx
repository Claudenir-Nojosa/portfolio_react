import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao } from './styles'
import { BotaoTema } from './styles'
import { SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Claudenir Nojosa</Titulo>
      <Paragrafo fontSize={15} tipo="secundario">
        Claudenir-Nojosa
      </Paragrafo>
      <Descricao fontSize={12}>Engenheiro Front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
