import styled from 'styled-components'
import { PStyle } from '../../components/Paragraph/styles'

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`

export const Description = styled(PStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`