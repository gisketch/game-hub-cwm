import { ReactNode, useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

interface Props {
  children: string
}

const ExpendableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)

  const charThreshold = 300

  if (!children) return null

  if (children.length <= charThreshold) return <Text>{children}</Text>

  const summary = expanded
    ? children
    : children.substring(0, charThreshold) + '...'

  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          colorScheme="yellow"
          fontWeight="bold"
          size="xs"
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </Text>
    </>
  )
}

export default ExpendableText
