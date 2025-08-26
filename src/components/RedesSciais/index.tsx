import { RedesSociaisContainer } from './styles'
import { SocialLink } from './styles'

const RedeSociais = () => (
  <RedesSociaisContainer>
    <SocialLink
      href="https://https://www.instagram.com/ricklocao"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-instagram"></i>
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/rick_dev_br/"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-linkedin"></i>
    </SocialLink>
    <SocialLink
      href="https://www.github.com/Rick_Dev_Br/"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-github"></i>
    </SocialLink>
    <SocialLink
      href="https://https://steamcommunity.com/id/R1CKGAMER1/"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-steam"></i>
    </SocialLink>
  </RedesSociaisContainer>
)

export default RedeSociais
