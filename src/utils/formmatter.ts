import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Repository {
  id: number
  name: string
  updated_at: string
}

export const calculateDistance = (
  repository: Repository,
  date: Date,
): string => {
  const updatedDate = new Date(repository.updated_at)
  const distance = formatDistance(updatedDate, date, {
    locale: ptBR,
    addSuffix: true,
  })
  return distance
}
