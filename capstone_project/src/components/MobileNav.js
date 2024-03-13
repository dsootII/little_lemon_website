import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

export default function MobileNav() {

    const navigate = useNavigate();

    return (
    <Menu>
        <MenuButton as={Button}>
            <HamburgerIcon/>
        </MenuButton>
        <MenuList>
            <MenuItem onClick={()=>navigate('/')}>Home</MenuItem>
            <MenuItem onClick={()=>navigate('/menu')}>Menu</MenuItem>
            <MenuItem onClick={()=>navigate('/about')}>About</MenuItem>
            <MenuItem onClick={()=>navigate('/reservation')}>Reservations</MenuItem>
            <MenuItem onClick={()=>navigate('/orderonline')}>Order Online</MenuItem>
            <MenuItem onClick={()=>navigate('/login')}>Login</MenuItem>
        </MenuList>
    </Menu>
    )
}