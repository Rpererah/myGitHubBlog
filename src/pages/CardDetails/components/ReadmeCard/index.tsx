import { ReadmeContainer, ReadmeMainLayout } from './styles'
interface ReadCardProps {
  readme: string
}
export function ReadmeCard({ readme }: ReadCardProps) {
  return (
    <ReadmeContainer>
      <ReadmeMainLayout>{readme}</ReadmeMainLayout>
    </ReadmeContainer>
  )
}
