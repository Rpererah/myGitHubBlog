import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { CardsLayout, FormContainer, HomeContainer } from './styles'

export function Home() {
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsLayout>
    </HomeContainer>
  )
}
