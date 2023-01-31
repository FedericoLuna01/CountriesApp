import { SearchIcon } from "@chakra-ui/icons"
import { Button, Grid, Input, InputGroup, InputLeftElement, Select, Spinner, Stack, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getAllCountries } from "../api/GetAllCountries"
import { getCountriesByRegion } from "../api/getCountriesByRegion"
import { CountryCard } from "./CountryCard"
import { Message } from "./Message"

export const CountryList = () => {

  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const bgColor = useColorModeValue('blackAlpha.100', 'gray.800')
  const bgColorInput = useColorModeValue('white', 'gray.700')

  const fetchCountries = async () => {
    const countries = await getAllCountries();
    setAllCountries(countries)
    setCountries(countries.slice(0, 20))
    setIsLoading(false)
    // setCountries(countries.slice(0, 50))  
  }

  useEffect(() => {
    fetchCountries()
  }, [])
  
  const handleChange = (e) => {
    const region = e.target.value
    const countriesByregion = getCountriesByRegion(region, allCountries)
    setCountries(countriesByregion)
  }

  const handleInput = (e) => {
    const value = e.target.value
    const filteredCountries = allCountries.filter(country => country.name.toLowerCase().includes(value.toLowerCase()))
    setCountries(filteredCountries)
  }

  const handleLoadMore = () => {
    setCountries(countries.concat(allCountries.slice(countries.length, countries.length + 20)))
  }

  return (
    <Stack
      bg={bgColor}
      minH='100vh'
    >
      <Stack
        direction={{base: 'column', sm: 'row'}}
        justify='space-between'
        px={{base: 9, md: 16, xl: 32, '2xl': 64}}
        py={8}
        pt={28}
      >
        <Stack>
          <InputGroup>
            <InputLeftElement 
              pointerEvents='none'
              children={<SearchIcon color="gray.300" />}
            />
            <Input 
              placeholder='Search for a country...'
              onChange={(e) => handleInput(e)}
              size='md'
              bg={bgColorInput}
            />
          </InputGroup>
        </Stack>
        <Stack>
          <Select
            placeholder='Filter by Region'
            onChange={e => handleChange(e)}
            bg={bgColorInput}
            >
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </Select>
        </Stack>
      </Stack>
      <Stack
        align='center'
      >
      {
        isLoading ? <Spinner size='xl' /> : (
        countries.length === 0 ? <Message /> : (
          <Grid
            templateColumns={{base: 'repeat(1, 1fr)', sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)', xl: 'repeat(4, 1fr)'}} 
            alignItems='center'
            gap={9}
            px={{base: 9, md: 16, xl: 32, '2xl': 64}}
            >
            {
              countries.map((country) => (
                <CountryCard
                  key={country.name}
                  country={country}
                />
                ))
            }
          </Grid>
        )
      )}
      {
        countries.length > 0 && (
          <Button
            onClick={handleLoadMore}
          >
            Load More
          </Button>
      )}
      </Stack>
    </Stack>
  )
}
