import { CardContainer } from './styles'

export function Card() {
  const text = `Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.`
  const maxWords = 41

  const truncatedText = text.split(' ').slice(0, maxWords).join(' ')
  return (
    <CardContainer>
      <div>
        <h1>JavaScript data types and data structures</h1> <p>ha 1 dia</p>
      </div>
      <p>
        {truncatedText}
        {text.length > 25 && '...'}
      </p>
    </CardContainer>
  )
}
