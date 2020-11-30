require('dotenv').config({ path: '.env.local' })

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const { exception } = require('console');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const data_path = path.join(__dirname, 'data');
console.log(`File archive located at ${data_path}`)

const get_recent = () => {
    let most_recent = glob.sync(path.join(data_path, '*.json'))
    .map(name => ({name, ctime: fs.statSync(name).ctime}))
    .sort((a, b) => b.ctime - a.ctime)[0].name
    return most_recent;
}

app.get('/', (req, res) => {
    console.log('GET request received');
    try {
        let file = get_recent()
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            res.send(data)
        })
    } catch(err) {
        console.log('No previous files are available')
        res.sendStatus(404)
    }
})

app.post('/posts', (req, res) => {
    console.log('POST request received');
    try {
        if (!req.body) throw new Error('No data received')
        let data = JSON.stringify(req.body)
        let filename = `${Date.now()}.json`
        let filepath = path.join(data_path, filename)
        fs.writeFile(filepath, data, (err) => {
            if (err) throw err;
            console.log(`Data written to file ${filepath}`)
        })
        res.send(`Wrote to ${filename}`)
    } catch(err) {
        console.log(err)
    };
})

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})