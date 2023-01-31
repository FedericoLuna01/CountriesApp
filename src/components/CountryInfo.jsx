import { useEffect, useState } from "react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Badge, Button, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { Link as ReachLink } from "react-router-dom"
import { Message } from "./Message"
import { getCountryByName } from "../api/getCountryByName"

export const CountryInfo = () => {
  const bgColor = useColorModeValue('blackAlpha.100', 'gray.800')
  const bgColorInput = useColorModeValue('white', 'gray.700')
  const [country, setCountry] = useState({})

  const {name} = useParams()
  const getCountry = async () => {
    const country = await getCountryByName(name)
    setCountry(country[0])
  }

  useEffect(() => {
    getCountry()
  }, [])

  const getCurrrencies = () => {
    if (country?.currencies) {
      return country.currencies.map(currency => currency.name).join(', ')
    }
  }

  const getLang = () => {
    if (country?.languages) {
      return country.languages.map(language => language.name).join(', ')
    }
  }
  
  const currencies = getCurrrencies()
  const languages = getLang()

  return (
    <Stack
      direction='column'
      minHeight='100vh'
      bg={bgColor}
      pt={{base: 16, md:12}}
      px={{base: 9, md: 16, xl: 32, '2xl': 64}}
    >
      <Stack
        my={12}
      >
        <Button
          as={ReachLink}
          to='/'
          bg={bgColorInput}
          leftIcon={<ArrowBackIcon />}
          w={130}
        >
          Back
        </Button>
      </Stack>
      {
        country === undefined ? <Message /> : (
          <Stack 
            direction={'row'}
            justify='space-between'
            wrap='wrap'
          >
            <Image src={country.flag}
              w={{base: '100%', md: '45%'}}
              boxShadow='lg'
            />
            <Stack
                justify='space-between'
              >
              <Stack
                mt={{base: 10, md: 0}}
              >
                <Heading>{country.name}</Heading>
              </Stack>
              <Stack
                direction={{base: 'column', sm: 'row'}}
                justify={{xl:'space-between'}}
                gap={{base: 4, sm: 20}}
                placeSelf='flex-start'
              >
                <Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Native name:</Text>
                    <Text>{country.nativeName}</Text>
                  </Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Population:</Text>
                    <Text>{country.population}</Text>
                  </Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Region:</Text>
                    <Text>{country.region}</Text>
                  </Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Sub Region:</Text>
                    <Text>{country.subregion}</Text>
                  </Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Capital:</Text>
                    <Text>{country.capital}</Text>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Top Level Domain:</Text>
                    <Text>{country.topLevelDomain}</Text>
                  </Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Currencies:</Text>
                    <Text>{currencies}</Text>
                  </Stack>
                  <Stack
                    direction='row'
                  >
                    <Text fontWeight='semibold'>Languages:</Text>
                    <Text>{languages}</Text>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction='row'
              >
                <Text fontWeight='semibold'>Border countries:</Text>
                <Stack
                  direction='row'
                  align='center'
                >
                {
                  country.borders && country.borders.map(border => (
                    <Badge
                      key={border}
                      bg={bgColorInput}
                      px={2}
                      py={1}
                    >
                      {border}
                    </Badge>
                  ))
                }
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )
      }
    </Stack>
  )
}
