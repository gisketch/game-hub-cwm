import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import useGameQueryStore from '../store'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack padding="10px">
      <NavLink to="">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </NavLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
