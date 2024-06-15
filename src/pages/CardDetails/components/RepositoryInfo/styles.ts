import styled from 'styled-components'

export const RepositoryInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  height: 10.5rem;
  width: 54rem;
  border-radius: 10px;
  margin-top: -5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }
  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const RepositoryLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const RepositoryIconsFooter = styled.footer`
  display: flex;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme['base-label']};
  }
  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme['base-span']};
  }
`
