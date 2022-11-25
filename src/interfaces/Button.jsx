import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { postData } from '../api';
import _debounce from '../functions/debounce';
import { isDev } from "../config";

const STATE = {
    SAVE: 0,
    LOADING: 1,
    SUCCESS: 2,
    FAIL: 3,
}
const COLOR = [
    "primary", "primary", "success", "fail",
]
const TEXT = [
    "SAVE", "LOADING", "SUCCESS", "FAIL",
]
let debounce;

function Button() {
    const [state, setState] = React.useState(STATE.SAVE);

    if(!debounce) debounce = _debounce(() => setState(STATE.SAVE), 1000)
    
    const handleClick = () => {
        setState(STATE.LOADING)
        postData().then(result => {
            if(result) setState(STATE.SUCCESS);
            else setState(STATE.FAIL);
            debounce();
        })
    };

    return (
        isDev&& (
            <LoadingButton
                color={COLOR[state]}
                loadingPosition="start"
                loading={state===STATE.LOADING}
                startIcon={<SaveIcon />}
                variant="contained"
                sx={{fontWeight: "bold"}}
                onClick={handleClick}
                style={{zIndex: "1000", position: "fixed", bottom: "1rem", left: "50%", transform: "translate(-50%, 0)"}}
            >
                {TEXT[state]}
            </LoadingButton>
        )
    )
}

export default React.memo(Button);