import { CardContainer } from './styles'

interface CardProps {
  title: string
  text: string
  amountTime: string
}

export function Card({ title, text, amountTime }: CardProps) {
  const maxWords = 20

  let truncatedText = ''
  if (text) {
    truncatedText = text.split(' ').slice(0, maxWords).join(' ')
  }
  return (
    <CardContainer>
      <div>
        <h1>{title}</h1> <p>{amountTime}</p>
      </div>
      <p>
        {truncatedText}
        {text != null && text.length > 25 && '...'}
      </p>
    </CardContainer>
  )
}
