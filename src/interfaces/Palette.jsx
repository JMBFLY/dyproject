import * as React from 'react';
import PaletteComponent from "../components/Palette";
import { isDev } from "../config";

function Palette({ setColor }) {
    return isDev&& <PaletteComponent setColor={setColor}/>;
}

export default React.memo(Palette);
