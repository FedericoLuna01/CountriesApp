import { Heading, Stack, useColorModeValue } from "@chakra-ui/react"

export const Message = () => {
  const bgColor = useColorModeValue('white', 'gray.700')
  return (
    <Stack
        textAlign='center'
        alignSelf='center'
        bg={bgColor}
        maxW='300px'
        p={4}
        borderRadius='lg'
    >
        <Heading
            as='h1'
        >
            404
        </Heading>
        <Heading
            as='h3'
            size='md'
        >
            No hay nada para mostrar :(
        </Heading>
    </Stack>
  )
}
