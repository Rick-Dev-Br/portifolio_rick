import styled from 'styled-components'
import type { Theme } from '../../themes/light'

export const RedesSociaisContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  justify-content: center;
`

export const SocialLink = styled.a`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme as Theme).corSecundaria};
  }
`
