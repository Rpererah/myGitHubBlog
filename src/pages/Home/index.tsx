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
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { calculateDistance } from '../../utils/formmatter'

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
  const [publicRepos, setPublicRepos] = useState<number>(0)
  const navigate = useNavigate()

  useEffect(() => {
    async function getRespositorys() {
      const response = await api.get('/repos', {
        params: {
          per_page: 8,
          sort: 'updated',
          direction: 'desc',
        },
      })

      const repositoriesData: repositoryProps[] = response.data.map(
        (repo: repositoryProps) => ({
          id: repo.id,
          name: repo.name,
          updated_at: repo.updated_at,
          description: repo.description,
        }),
      )
      setRepository(repositoriesData)
    }

    getRespositorys()
  }, [])

  useEffect(() => {
    const currentDate = new Date()
    const calculatedDistances = repository.map((repo) =>
      calculateDistance(repo, currentDate),
    )
    setDistance(calculatedDistances)
  }, [date, repository])

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    const response = await axios.get(
      `https://api.github.com/search/repositories`,
      {
        params: {
          q: `user:rpererah ${data.query}`,
          sort: 'updated',
          order: 'desc',
          per_page: 8,
        },
      },
    )

    console.log('API response:', response.data.items)

    const repositoriesData: repositoryProps[] = response.data.items.map(
      (repo: repositoryProps) => ({
        id: repo.id,
        name: repo.name,
        updated_at: repo.updated_at,
        description: repo.description,
      }),
    )
    setRepository(repositoriesData)
  }

  function handleNavigate(id: number) {
    navigate(`card-details/${id}`)
  }

  return (
    <HomeContainer>
      <Header />
      <Profile onPublicReposFetched={setPublicRepos} />

      <FormContainer onSubmit={handleSubmit(handleSearchIssues)}>
        <div>
          <h3>Publicacoes</h3> <h4>{publicRepos} publicações</h4>
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
            id={repositoryItem.id}
            key={repositoryItem.id}
            text={repositoryItem.description}
            title={repositoryItem.name}
            amountTime={distance[index]}
            onClick={handleNavigate}
          />
        ))}
      </CardsLayout>
    </HomeContainer>
  )
}
