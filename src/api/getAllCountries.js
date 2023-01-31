export const getAllCountries = async () => {
    const url = 'https://restcountries.com/v2/all';
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
        
    } catch (error) {
        console.log(error);
    }

}
