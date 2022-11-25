import * as React from 'react';
import { colors, accents } from "../../palette";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ColorBox from './ColorBox';
export { colors, accents };

function Palette({ setColor }) {
    const [state, setState] = React.useState(false);
    const [isShow, setIsShow] = React.useState(false);
    
    const handleButtonClick = () => {
        const _state = !state;
        setState(_state);
        setIsShow(_state);
    }

    return (
        <span style={{position: "relative", zIndex: "999"}}>
            <span style={{display: "flex", flexDirection: "column", position: "absolute"}}>
                <ColorLensIcon onClick={handleButtonClick} style={{cursor: "pointer"}} />
                {isShow&& <ColorBox setState={setIsShow} setColor={setColor} />}
            </span>
        </span>
    );
};

export default React.memo(Palette);