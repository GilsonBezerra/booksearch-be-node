const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    subject: String,
    price: Number,
    publishingDate: Date,
    publisher: String,
    publishingEmail: String,
    publishingPhone: String,

}, { versionKey: false });

module.exports = mongoose.model('Book', bookSchema);

