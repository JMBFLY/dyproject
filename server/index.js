const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 3300;


const fs = require('fs');
const FILE_NAME = "server/data.json";

const getData = async() => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(FILE_NAME, 'utf-8', (err, _data) => {
            if(err) reject(err);
            const json = JSON.parse(_data);
            resolve(json);
        })
    })
    return await promise;
}

app.route('/api')
    .get(async (req, res) => {
        const data = await getData();
        res.status(200).json(data);
    })
    .post(async (req, res) => {
        const data = req.body.data;
        //수정작업
        fs.writeFile(FILE_NAME, JSON.stringify(data), 'utf-8', (err) => {
            if(err) res.status(501).json();
            else res.status(202).json();
        })
    })


const SERVER_DOMAIN = `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`server is running    ${SERVER_DOMAIN}`);
});