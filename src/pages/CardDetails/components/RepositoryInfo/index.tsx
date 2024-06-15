import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  RepositoryIconsFooter,
  RepositoryInfoContainer,
  RepositoryLinksContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { calculateDistance } from '../../../../utils/formmatter'
export interface RepositoryInfoProps {
  link: string
  title: string
  username: string
  timeAmount: string
}
export function RepositoryInfo({
  link,
  timeAmount,
  title,
  username,
}: RepositoryInfoProps) {
  let updatedDate = new Date(timeAmount)

  if (isNaN(updatedDate.getTime())) {
    console.warn(`Invalid date format for timeAmount: ${timeAmount}`)
    updatedDate = new Date()
  }

  const currentDate = new Date()

  const formattedTime = calculateDistance(
    { id: 0, name: title, updated_at: updatedDate.toISOString() },
    currentDate,
  )
  console.log(formattedTime)

  return (
    <RepositoryInfoContainer>
      <RepositoryLinksContainer>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>
        <a href={link} target="_blank" rel="noreferrer">
          GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </RepositoryLinksContainer>
      <div>
        <h1>{title}</h1>
      </div>
      <RepositoryIconsFooter>
        <p>
          <FontAwesomeIcon icon={faGithub} />
          {username}
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formattedTime}
        </p>
      </RepositoryIconsFooter>
    </RepositoryInfoContainer>
  )
}
