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

interface profileProps {
  login: string
  followers: string
  avatar_url: string
  bio: string
}

export function Profile() {
  const [profile, setProfile] = useState<profileProps>({
    login: '',
    followers: '',
    avatar_url: '',
    bio: '',
  })
  async function getGitHubProfile() {
    try {
      const response = await api.get('')
      const { login, followers, avatar_url, bio } = response.data
      setProfile({ login, followers, avatar_url, bio })
      console.log(profile)
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
          <a href="">
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
