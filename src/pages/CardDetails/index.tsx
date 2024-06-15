/* eslint-disable camelcase */
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ReadmeCard } from './components/ReadmeCard'
import {
  RepositoryInfo,
  RepositoryInfoProps,
} from './components/RepositoryInfo'
import { CardDetailsContainer, ReadmeMainContainer } from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function CardDetails() {
  const { id } = useParams()
  const [repository, setRepository] = useState<RepositoryInfoProps>({
    link: '',
    timeAmount: '',
    title: '',
    username: '',
  })
  const [readme, setReadme] = useState<string>('')
  const [mydescription, setDescription] = useState<string>('')

  async function getRepositoryDetailsById() {
    try {
      const response = await axios.get(
        `https://api.github.com/repositories/${id}`,
      )

      const { name, html_url, updated_at, owner, description } = response.data
      setRepository({
        title: name,
        link: html_url,
        timeAmount: updated_at,
        username: owner.login,
      })
      setDescription(description)
      const accessToken = import.meta.env.VITE_GITHUB_TOKEN
      try {
        const readmeResponse = await axios.get(
          `https://api.github.com/repos/${owner.login}/${name}/contents/README.md`,
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          },
        )

        if (readmeResponse.status === 200) {
          const readmeContent = atob(readmeResponse.data.content)
          setReadme(readmeContent)
        } else {
          setReadme('Este repositório não possui um README.md.')
        }
      } catch (e) {
        console.warn('Erro ao obter o README.md:', e)
        setReadme('Erro ao carregar o README.md.')
      }
    } catch (error) {
      console.error('Erro ao obter detalhes do repositório:', error)
    }
  }

  useEffect(() => {
    getRepositoryDetailsById()
  }, [id])

  return (
    <CardDetailsContainer>
      <Header />
      <RepositoryInfo
        link={repository.link}
        title={repository.title}
        username={repository.username}
        timeAmount={repository.timeAmount}
      />
      <ReadmeMainContainer>{mydescription}</ReadmeMainContainer>
      <ReadmeCard readme={readme} />
    </CardDetailsContainer>
  )
}
