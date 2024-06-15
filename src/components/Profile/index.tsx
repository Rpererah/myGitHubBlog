/* eslint-disable camelcase */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconsContainer,
  IconsLayout,
  ProfileContainer,
  TitleProfileContainer,
} from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface ProfileProps {
  onPublicReposFetched: (public_repos: number) => void
}

interface ProfileDataProps {
  login: string
  followers: string
  avatar_url: string
  bio: string
  public_repos: number
}

export function Profile({ onPublicReposFetched }: ProfileProps) {
  const [profile, setProfile] = useState<ProfileDataProps>({
    login: '',
    followers: '',
    avatar_url: '',
    bio: '',
    public_repos: 0,
  })
  async function getGitHubProfile() {
    try {
      const response = await api.get('')
      console.log(response.data)
      const { login, followers, avatar_url, bio, public_repos } = response.data
      setProfile({ login, followers, avatar_url, bio, public_repos })
      onPublicReposFetched(public_repos)
    } catch {
      console.error('Erro ao obter perfil do GitHub')
    }
  }

  useEffect(() => {
    getGitHubProfile()
  }, [])

  return (
    <ProfileContainer>
      <div>
        <img src={profile.avatar_url} alt="" />
      </div>
      <div>
        <TitleProfileContainer>
          <h2>{profile.login}</h2>
          <a
            href="https://github.com/Rpererah"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleProfileContainer>

        <p>{profile.bio}</p>
        <IconsContainer>
          <IconsLayout>
            <FontAwesomeIcon icon={faGithub} />
            <p>{profile.login}</p>
          </IconsLayout>
          <IconsLayout>
            <FontAwesomeIcon icon={faBuilding} />
            <p>Rocketseat</p>
          </IconsLayout>
          <IconsLayout>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{profile.followers}</p>
          </IconsLayout>
        </IconsContainer>
      </div>
    </ProfileContainer>
  )
}
