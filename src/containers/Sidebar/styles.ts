import { P } from '../../components/Paragrafo/styles'
import styled from 'styled-components'
import type { Theme } from '../../themes/light'

export const Descricao = styled(P)`
  margin-top: 15px;
  margin-bottom: 15px;
`
export const BotaoTema = styled.button`
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  color: ${(props) => (props.theme as Theme).corDoFundo};
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  margin-top: 24px;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
