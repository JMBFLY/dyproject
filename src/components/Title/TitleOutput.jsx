import * as React from 'react';

function TitleOutput({ title="" }) {
    return <h2
        style={{fontSize: "2rem"}}
    >{title}</h2>
}

export default React.memo(TitleOutput);