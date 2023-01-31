import { Stack } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import { CountryInfo } from "../components/CountryInfo"
import { CountryList } from "../components/CountryList"
import { NavBar } from "../components/NavBar"

export const AppRoutes = () => {
  return (
    <>
        <NavBar />
        <Stack>
            <Routes>  
                <Route path="/" element={<CountryList />} />
                <Route path="/country/:name" element={<CountryInfo />} />

                <Route path="/*" element={<Navigate to='/' />} />
            </Routes>  
        </Stack>
    </>
  )
}
