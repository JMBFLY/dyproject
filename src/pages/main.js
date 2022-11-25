import * as React from 'react';
import Title from '../interfaces/Title';


function Main({ contents, setTitles }) {
    const inputRef = React.useRef(null);

    const handleButtonClick = () => {
        const text = inputRef.current.value;
        console.log(text);
    };

    return (
        <div>
            { contents.map((content, key) => {
                return <Title key={key} title={content.title} setTitle={setTitles[key]} />
            })}
        </div>
    );
};

export default React.memo(Main);