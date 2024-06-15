import { CardContainer } from './styles'

interface CardProps {
  id: number
  title: string
  text: string
  amountTime: string
  onClick: (id: number) => void
}

export function Card({ id, title, text, amountTime, onClick }: CardProps) {
  const maxWords = 19

  let truncatedText = ''
  if (text) {
    truncatedText = text.split(' ').slice(0, maxWords).join(' ')
  }
  return (
    <CardContainer onClick={() => onClick(id)}>
      <div>
        <h1>{title}</h1> <p>{amountTime}</p>
      </div>
      <p>
        {truncatedText}
        {text === null &&
          'This repository currently does not have a description.'}
        {text != null && text.length > 25 && '...'}
      </p>
    </CardContainer>
  )
}
