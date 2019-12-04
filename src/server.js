const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const book = require('./models/Book');
const bookController = require('./controllers/bookController');
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors);


mongoose.connect('mongodb://localhost:27017/book_data', { useNewUrlParser: true, useUnifiedTopology: true });

server.use("/books", bookController);

/* 
return res.status(200).json({ message: 'Deu certo' });
}); */

server.listen(3000);