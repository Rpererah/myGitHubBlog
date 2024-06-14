import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  height: 13.25rem;
  width: 54rem;
  padding: 2rem;
  gap: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5rem;
  margin-bottom: 4.5rem;
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const TitleProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`
export const IconsLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
