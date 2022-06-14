import styled from 'styled-components'

import { theme } from '@/layouts/theme'

type MyProps = {
  color?: string
}
export const H1 = styled.h1<MyProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: ${(p) => (p.color ? p.color : theme.palette.fontColor.default)};
`
export const H2 = styled.h2<MyProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  /* identical to box height */

  color: ${(p) => (p.color ? p.color : theme.palette.fontColor.default)};
`
export const H3 = styled.h3<MyProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${(p) => (p.color ? p.color : theme.palette.fontColor.default)};
`

export const Label = styled.label<MyProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${(p) => (p.color ? p.color : theme.palette.fontColor.default)};
`
