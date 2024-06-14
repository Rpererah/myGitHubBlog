import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { CardsLayout, FormContainer, HomeContainer } from './styles'

export function Home() {
  const text = `Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.`
  const title = 'JavaScript data types and data structures'
  const amountTime = 'ha 1 dia'
  return (
    <HomeContainer>
      <Header />
      <Profile />

      <FormContainer>
        <div>
          <h3>Publicacoes</h3> <h4>6 publicações</h4>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
      <CardsLayout>
        <Card text={text} title={title} amountTime={amountTime} />
        <Card text={text} title={title} amountTime={amountTime} />
        <Card text={text} title={title} amountTime={amountTime} />
        <Card text={text} title={title} amountTime={amountTime} />
        <Card text={text} title={title} amountTime={amountTime} />
        <Card text={text} title={title} amountTime={amountTime} />
      </CardsLayout>
    </HomeContainer>
  )
}
