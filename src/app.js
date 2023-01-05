const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path: './src/config/config.env'});
app.use(express.json());
//importing routes

const routes = require('./routes/routes');

app.use('/api/v1', routes)

module.exports = app;