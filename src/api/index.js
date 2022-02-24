const express = require('express');
require('dotenv').config()
const app = express();

const bodyParser = require('body-parser');

const { resolve } = require('path');

const uploadPath = resolve(__dirname, '..', 'uploads');

const { clients, clientLogin, recipes, products } = require('../routes');

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/', clients);
app.use('/clients', clients);
app.use('/clientlogin', clientLogin);
app.use('/recipes', recipes);
app.use('/products', products)

app.use('/images', express.static(`${uploadPath}`));

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}!`));
