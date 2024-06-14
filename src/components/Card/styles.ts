import styled from 'styled-components'

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 16.25rem;
  width: 26rem;
  background-color: ${(props) => props.theme['base-post']};
  padding: 2.5rem;
  gap: 1rem;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      max-width: 17.688rem;
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
