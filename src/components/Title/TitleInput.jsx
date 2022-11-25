import * as React from 'react';
import TextField from '@mui/material/TextField';

function TitleInput({ title, setTitle }) {
    return <TextField 
        id="standard-basic" variant="standard" placeholder='title' size= "medium"
        fullWidth required InputProps={{style: {fontSize: "2rem", color: "primary"}}} label="Required"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
    />
}

export default React.memo(TitleInput);