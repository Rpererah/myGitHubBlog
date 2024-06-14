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

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/54297084?v=4"
          alt=""
        />
      </div>
      <div>
        <TitleProfileContainer>
          <h2>Rpererah</h2>
          <a href="">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleProfileContainer>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <IconsContainer>
          <IconsLayout>
            <FontAwesomeIcon icon={faGithub} />
            <p>Rpererah</p>
          </IconsLayout>
          <IconsLayout>
            <FontAwesomeIcon icon={faBuilding} />
            <p>Rocketseat</p>
          </IconsLayout>
          <IconsLayout>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>32 seguidores</p>
          </IconsLayout>
        </IconsContainer>
      </div>
    </ProfileContainer>
  )
}
