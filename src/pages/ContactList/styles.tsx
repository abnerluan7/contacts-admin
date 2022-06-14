import styled from 'styled-components'

import { theme } from '@/layouts/theme'

type MyProps = {
  active: boolean
}
export const Container = styled.div``

export const Content = styled.div`
  width: 80vw;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

export const List = styled.div<MyProps>`
  width: ${(p) => (p.active ? '40%' : '80vw')};
  transition: 0.5s;
  @media (max-width: 820px) {
    width: 100%;
  }
`

export const Edit = styled.div<MyProps>`
  width: 60%;
  display: ${(p) => (p.active ? 'block' : 'none')};
  transition: 0.5s;
  @media (max-width: 820px) {
    position: absolute;
    width: 90vw;
    height: 60vh;
    background-color: ${theme.palette.background.default};
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;

    box-shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)';
  }
`

export const EditContent = styled.div`
  @media (min-width: 820px) {
    position: fixed;
    width: 60%;
  }
`
