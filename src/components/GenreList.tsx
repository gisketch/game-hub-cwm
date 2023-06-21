import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import Genre from '../entities/Genre'
import getCroppedImageUrl from '../services/image-url'
import GenreListSkeleton from './GenreListSkeleton'
import useGameQueryStore from '../store'

const GenreList = () => {
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId)
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId)

  const { data, isLoading, error } = useGenres()
  const skeletonMap = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]

  if (error) return null

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletonMap.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
