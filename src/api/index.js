import initData from '../data.json';

const SERVER_DOMAIN = `http://localhost:${3300}`;

const receiveData = async () => {
    return await fetch(`${SERVER_DOMAIN}/api`, {
        method: "GET",
    }).then(res => res.json())
}
const postData = async () => {
    return await fetch(`${SERVER_DOMAIN}/api`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            data: getData()
        })
    }).then(res => res.status === 202)
}

const data = { ...initData };
const getData = () => data;
const setData = (serverData) => {
    for(const key of Object.keys(data))
        delete data[key];
    for(const key of (Object.keys(serverData)))
        data[key] = serverData[key];
};

/*  {
        navColor: string,
        navSize: int,
        goBackBtnColor: string,
        contents: [
            {
                title: string,
                kind: string,
                backgroundColor: string,
                components: [
                    string,
                ]
            },
        ],
    }  */
    
const getNavColor = () => data.navColor;
const setNavColor = (color) => {
    data.navColor = color;
}
const getNavSize = () => data.navSize;
const setNavSize = (size) => {
    data.navSize = size;
}
const getGoBackBtnColor = () => data.goBackBtnColor;
const setGoBackBtnColor = (color) => {
    data.goBackBtnColor = color;
}
const getContents = () => data.contents;
const setContents = (contents) => {
    data.contents = [ ...contents ];
}
export { 
    getData, setData, postData, receiveData,
    getNavColor, setNavColor,
    getNavSize, setNavSize,
    getGoBackBtnColor, setGoBackBtnColor,
    getContents, setContents,
};