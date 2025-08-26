import styled from 'styled-components'
import type { Theme } from '../../themes/light'

export const RedesSociaisContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  justify-content: center;
  flex-wrap: wrap;
`

export const SocialLink = styled.a`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: 28px;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => (props.theme as Theme).corSecundaria};
    transform: translateY(-3px);
  }

  // garante que o link seja clicável
  position: relative;
  z-index: 10;
`
