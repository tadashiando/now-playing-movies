'use strict'

require('./config/config');
const express = require('express')
const axios = require('axios')
const path = require('path')

const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Public folder
app.use(express.static(path.resolve(__dirname, '../public')));

//Routes global configuration
app.use(require('./routes/index'))

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
})