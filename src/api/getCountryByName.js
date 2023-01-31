export const getCountryByName = async (name) => {
    const url = `https://restcountries.com/v2/name/${name}?fullText=true`
    const res = await fetch(url)
    const data = await res.json()
    return data
} 