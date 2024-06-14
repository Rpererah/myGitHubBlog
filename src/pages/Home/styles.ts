import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 54rem;
  margin-bottom: 3rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  input {
    height: 3.125rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const CardsLayout = styled.main`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  max-width: 54rem;
`
