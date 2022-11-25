import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider, createTheme } from "@mui/material";

function DarkMode({ mode, toggleMode }) {
    const modeTheme = createTheme({ palette: { mode } });

    return (
        <ThemeProvider theme={modeTheme}>
            <IconButton sx={{ ml: 1, color: 'text.primary' }} onClick={toggleMode} color="inherit">
                {mode === 'dark' ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
            </IconButton>
        </ThemeProvider>
    )
}

export default React.memo(DarkMode);