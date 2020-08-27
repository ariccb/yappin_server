// load anc cache modules
const express = require('express') //send receive requests
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors({origin: [
    'http://localhost:8080'
]}))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)