import styled from 'styled-components'
import type { Theme } from '../../themes/light'

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).corDaBorda};
  padding: 16px;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const LinkBotao = styled.a`
  color: ${(props) => (props.theme as Theme).corDoFundo};
  font-size: 14px;
  background-color: ${(props) => (props.theme as Theme).corDeFundoBotao};
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).corPrincipal};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`

export const Stats = styled.span`
  font-size: 12px;
  color: ${(props) => (props.theme as Theme).corSecundaria};
  display: flex;
  align-items: center;
  gap: 4px;
`
