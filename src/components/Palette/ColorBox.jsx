import * as React from 'react';
import { colors, accents } from "./index";

function ColorBox({ setState, setColor }) {
    const colorBoxRef = React.useRef(null);

    const handleColorClick = (e) => {
        const color = e.target.getAttribute("name");
        setColor(color);
    };

    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if(colorBoxRef.current && !colorBoxRef.current.contains(e.target))
                setState(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ colorBoxRef, setState ]);

    return (
        <span ref={colorBoxRef} style={{display: "inline-flex", flexDirection: "column", fontSize: "0"}}>
            {Object.keys(colors).map(colorKey => (
                <span key={colorKey} style={{display: "flex", flexDirection: "row",}}>
                    {Object.keys(accents).map(accentKey => (
                        <span key={accentKey}
                            name={colorKey + accentKey}
                            onClick={handleColorClick}
                            style={{
                                backgroundColor: colors[colorKey][accents[accentKey]],
                                padding: "10px",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </span>
            ))}
        </span>
    );
};

export default React.memo(ColorBox);