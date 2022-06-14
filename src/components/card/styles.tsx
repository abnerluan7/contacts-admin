import styled from 'styled-components'

import { theme } from '@/layouts/theme'

type Props = {
  solid: boolean
}

export const Card = styled.button`
  background: ${(p: Props) =>
    p.solid ? theme.palette.primary.main : theme.palette.background.default};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;

  width: 100%;
  height: 72px;

  box-shadow: ${(p: Props) =>
    p.solid ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};
  border-radius: 8px;
  border: 0 none;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  display: block;

  &:active {
    background: ${theme.palette.secondary.main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:hover {
    background: ${theme.palette.secondary.main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
