import Paragrafo from '../../components/Paragrafo'
import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import RedeSociais from '../../components/RedesSciais'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  alteraTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Henrique</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Rick-Dev-Br
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <RedeSociais />
      <BotaoTema onClick={props.alteraTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
