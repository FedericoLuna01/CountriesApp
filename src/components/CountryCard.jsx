import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const CountryCard = ({country}) => {
  return (
    <Card 
      maxW={{base: '100%', sm:'xs'}}
      h='100%'
    >
      <CardBody
      p={0}
      >
        <Image
          src={country.flag}
          alt={`${country.name} flag`}
          h='45%'
          w='100%'
        />
        <Stack my={4} p={5}>
          <Heading 
            size='md'
          >
            <Link to={`/country/${country.name}`} country={country}>
              {country.name}
            </Link>
          </Heading>
          <Stack
            direction='row'
          >
            <Text 
              fontWeight={'semibold'}
            >
              Population: 
            </Text>
            <Text>{country.population}</Text>
          </Stack>
          <Stack
            direction='row'
          >
            <Text 
              fontWeight={'semibold'}
            >
              Region: 
            </Text>
            <Text>{country.region}</Text>
          </Stack>
          <Stack
            direction='row'
          >
            <Text 
              fontWeight={'semibold'}
            >
              Capital: 
            </Text>
            <Text>{country.capital}</Text>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}
