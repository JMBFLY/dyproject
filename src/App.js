import * as React from 'react';
import { ThemeProvider, createTheme } from "@mui/material";
import Box from '@mui/material/Box';
import { getContents, getData, receiveData, setContents, setData } from "./api";
import Main from "./pages/main";
import Navbar from './interfaces/Navbar';
import SaveButton from './interfaces/Button';
import { isDev } from './config';

let _mode = localStorage.getItem("mode");
!_mode&& (_mode = "dark");

let isInit = false;

function App() {
  const [mode, setMode] = React.useState(_mode);
  const [init, setInit] = React.useState(0);

  const modeTheme = createTheme({ palette: { mode } });
  const contents = getContents();
  const titles = contents.map(content => content.title);
  const setTitles = contents.map(content => {
    return (title) => {
      content.title = title;
      setContents(contents);
      setInit(init + 1);
    }
  })

  if(!isInit) {
    isInit = true;
    isDev&& receiveData()
      .then(serverData => {
        if(JSON.stringify(serverData) !== JSON.stringify(getData())) {
          setData(serverData);
          setInit(init + 1)
        }
      })
  }

  const toggleMode = () => {
    const _mode = mode==="dark"?"light":"dark";
    setMode(_mode);
    localStorage.setItem("mode", _mode);
  }


  return (
    <ThemeProvider theme={modeTheme}>
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          width: '100vw',
          height: '100vh'
        }}
      >
        <Navbar titles={titles} color="redA100" 
          mode={mode} toggleMode={toggleMode}
        />
        <Main contents={contents} setTitles={setTitles} />
        <SaveButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
