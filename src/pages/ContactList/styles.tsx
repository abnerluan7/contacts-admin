import styled from 'styled-components'

type MyProps = {
  active: boolean
}
export const Container = styled.div``

export const Content = styled.div<MyProps>`
  width: 80vw;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

export const List = styled.div<MyProps>`
  width: ${(p) => (p.active ? '40%' : '80vw')};
`

export const Edit = styled.div`
  width: 60%;
`

export const EditContent = styled.div`
  @media (min-width: 820px) {
    position: fixed;
    width: 60%;
  }
`
