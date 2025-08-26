import { RedesSociaisContainer, SocialLink } from './styles'

const RedeSociais = () => (
  <RedesSociaisContainer>
    <SocialLink
      href="https://www.instagram.com/ricklocao"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-instagram"></i>
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/rick-dev-br/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-linkedin"></i>
    </SocialLink>
    <SocialLink
      href="https://www.github.com/Rick-Dev-Br"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-github"></i>
    </SocialLink>
    <SocialLink
      href="https://steamcommunity.com/id/R1CKGAMER1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-steam"></i>
    </SocialLink>
  </RedesSociaisContainer>
)

export default RedeSociais
