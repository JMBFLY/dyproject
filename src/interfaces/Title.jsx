import * as React from 'react';
import TitleInput from "../components/Title/TitleInput";
import TitleOutput from "../components/Title/TitleOutput";
import { isDev } from "../config";

function Title({ title, setTitle }) {
    return isDev ? <TitleInput title={title} setTitle={setTitle} /> : <TitleOutput title={title} />;
}

export default React.memo(Title);