import { React, useState } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleClickMenuItem = route => {
        handleToggleMenu()
        navigate(route)
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleToggleMenu()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div"
                        sx={{
                            flexGrow: 1,
                        }}>
                        My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={() => handleClickMenuItem("/")}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleClickMenuItem("customers")}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText>Customers list</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleClickMenuItem("customers/add")}>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText>Add customers</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Header