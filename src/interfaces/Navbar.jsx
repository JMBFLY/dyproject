import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from "@mui/material";
import { theme } from "../palette";
import DarkMode from '../components/DarkMode';
import { isDev } from '../config';
import { getNavColor, setNavColor, getNavSize, setNavSize } from "../api"; 
import Palette from './Palette';

const DISPLAY = isDev ? { COMPRESS: {xs: 'none'}, RELEASE: {xs: 'flex'} }
: ((size) => {

/*  xs (extra-small) : 0px ~ 600px
    sm (small) : 600px ~ 960px
    md (medium): 960px ~ 1280px
    lg (large) : 1280px ~ 1920px
    xl (extra-large) : 1920px ~  */
    if(size < 600)
            return { COMPRESS: {xs: 'flex', sm: 'none'}, RELEASE: {xs: 'none', sm: 'flex'} }
        else if(size < 960)
            return { COMPRESS: {xs: 'flex', md: 'none'}, RELEASE: {xs: 'none', md: 'flex'} }
        else if(size < 1280)
            return { COMPRESS: {xs: 'flex', lg: 'none'}, RELEASE: {xs: 'none', lg: 'flex'} }
        else if(size < 1280)
            return { COMPRESS: {xs: 'flex', xl: 'none'}, RELEASE: {xs: 'none', xl: 'flex'} }
        else
            return { COMPRESS: {xs: 'flex'}, RELEASE: {xs: 'none'} }
    })(getNavSize() + 100);

function Navbar({titles, mode, toggleMode}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [init, setInit] = React.useState(0);
    const itemsRef = React.useRef(null);

    const color = getNavColor();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const changeColor = (_color) => {
        setNavColor(_color);
        setInit(init + 1);
    }

    React.useEffect(() => {
        let size = 0;
        for(const item of itemsRef.current.childNodes)
            size += item.offsetWidth;
        setNavSize(size);
    }, [titles])

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color={color}>
                <Palette setColor={changeColor} />
                <Container maxWidth="false">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: DISPLAY.COMPRESS }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            {titles.map((title, key) => (
                                <MenuItem key={key} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{title}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <Box ref={itemsRef} sx={{ flexGrow: 1, display: DISPLAY.RELEASE }}>
                            {titles.map((title, key) => (
                            <Button
                                key={key}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {title}
                            </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <DarkMode mode={mode} toggleMode={toggleMode} />       
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default React.memo(Navbar);