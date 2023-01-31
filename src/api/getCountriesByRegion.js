export const getCountriesByRegion = (region, countries) => {
    if (region === '') {
      return countries
    }
    const data = countries.filter(country => country.region === region)
    return data
}