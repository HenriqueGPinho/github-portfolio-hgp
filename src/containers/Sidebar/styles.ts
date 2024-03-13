import styled from 'styled-components'
import { PStyle } from '../../components/Paragraph/styles'
import { Theme } from '../../themes/dark'

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

export const Description = styled(PStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => (props.theme as Theme).backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`
