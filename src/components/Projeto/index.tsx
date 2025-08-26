import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao, InfoContainer, Stats } from './styles'

export type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
  linguagem?: string
  stars?: number
  forks?: number
}

const Projeto = ({
  titulo,
  descricao,
  link,
  linguagem,
  stars = 0,
  forks = 0
}: ProjetoProps) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>

    <InfoContainer>
      {linguagem && (
        <Stats>
          <i className="bi bi-code-slash"></i> {linguagem}
        </Stats>
      )}
      <Stats>
        <i className="bi bi-star"></i> {stars}
      </Stats>
      <Stats>
        <i className="bi bi-diagram-2"></i> {forks}
      </Stats>
    </InfoContainer>

    <LinkBotao href={link} target="_blank" rel="noopener noreferrer">
      Ver no GitHub
    </LinkBotao>
  </Card>
)

export default Projeto
