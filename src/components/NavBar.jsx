import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, Link, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link as ReachLink } from "react-router-dom"
import { useState } from "react"

export const NavBar = () => {
    const bgColor = useColorModeValue('white', 'gray.700')
    const [darkMode, setDarkMode] = useState(false)
    const { toggleColorMode } = useColorMode();
    const handleToggleTheme = () => {
        toggleColorMode()
        setDarkMode(!darkMode)
    }

  return (
    <Stack
        direction='row'
        justify='space-between'
        align='center'
        position='fixed'
        w='100%'
        zIndex={1}
        bg={bgColor}
        px={{base: 9, md: 16, xl: 32, '2xl': 64}}
        py={3}
    >
        <Link
            as={ReachLink}
            to='/'
            fontSize='2xl'
            fontWeight='bold'
        >
            Where in the world?
        </Link>
        <Button
            leftIcon={darkMode ? <MoonIcon /> : <SunIcon />}
            onClick={handleToggleTheme}
        >
            {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Button>
    </Stack>
  )
}
