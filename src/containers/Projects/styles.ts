import styled from 'styled-components'

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
