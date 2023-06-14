import {
  Card,
  CardBody,
  HStack,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react'

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton height="32px" width="32px" borderRadius={8} />
      </HStack>
    </ListItem>
  )
}

export default GenreListSkeleton
