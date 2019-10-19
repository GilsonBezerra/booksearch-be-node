const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors);
/* 
server.get('/', (req, res) => {
    return res.status(200).json({ message: 'Deu certo' });
}); */

server.listen(3000);