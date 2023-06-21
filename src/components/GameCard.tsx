import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import Game from '../entities/Game'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import { useNavigate } from 'react-router-dom'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate('/games/' + game.slug)}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
