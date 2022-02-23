const express = require('express');
require('dotenv').config()
const app = express();

const bodyParser = require('body-parser');

const { clients, clientLogin } = require('../routes');

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/', clients);
app.use('/clients', clients);
app.use('/clientlogin', clientLogin);

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}!`));
