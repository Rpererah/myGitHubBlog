import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const ReadmeContainer = styled.div`
  display: flex;
  width: 50rem;
  max-width: 50rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 2px;
  padding: 1rem;
`

export const ReadmeMainLayout = styled(ReactMarkdown)`
  padding: 1rem;
`
