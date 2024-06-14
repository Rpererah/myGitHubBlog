/* eslint-disable camelcase */
import { useForm } from 'react-hook-form'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { CardsLayout, FormContainer, HomeContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>
interface repositoryProps {
  id: number
  name: string
  updated_at: string
  description: string
}
export function Home() {
  const [repository, setRepository] = useState<repositoryProps[]>([])
  const [date] = useState(new Date())
  const [distance, setDistance] = useState<string[]>([])

  useEffect(() => {
    async function getRespositorys() {
      const response = await api.get('/repos', {
        params: {
          per_page: 8,
          sort: 'updated',
          direction: 'desc',
        },
      })

      console.log(response.data)
      const repositoriesData: repositoryProps[] = response.data.map(
        (repo: repositoryProps) => ({
          id: repo.id,
          name: repo.name,
          updated_at: repo.updated_at,
          description: repo.description,
        }),
      )
      setRepository(repositoriesData)
      console.log(repository)
    }

    getRespositorys()
  }, [])

  useEffect(() => {
    const calculateDistance = () => {
      const updatedDates = repository.map((repo) => new Date(repo.updated_at))
      const distances = updatedDates.map((updatedDate) =>
        formatDistance(updatedDate, date, { locale: ptBR, addSuffix: true }),
      )
      setDistance(distances)
    }
    calculateDistance()
  }, [date, repository])

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInputs) {
    console.log(data)
  }
  return (
    <HomeContainer>
      <Header />
      <Profile />

      <FormContainer onSubmit={handleSubmit(handleSearchIssues)}>
        <div>
          <h3>Publicacoes</h3> <h4>6 publicações</h4>
        </div>
        <input
          {...register('query')}
          type="text"
          placeholder="Buscar conteúdo"
        />
      </FormContainer>
      <CardsLayout>
        {repository.map((repositoryItem: repositoryProps, index: number) => (
          <Card
            key={repositoryItem.id}
            text={repositoryItem.description}
            title={repositoryItem.name}
            amountTime={distance[index]}
          />
        ))}
      </CardsLayout>
    </HomeContainer>
  )
}
