const express = require('express');
router = express.Router();
const book = require('../models/Book');

router.post('/books', (req, res) => {
    let b = new Book({
        title: req.body.title,
        author: req.body.author,
        subject: req.body.subject,
        price: req.body.price,
        publishingDate: req.body.publishingDate,
        publisher: req.body.publisher,
        publishingEmail: req.body.publishingEmail,
        publishingPhone: req.body.publishingPhone

    });
    b.save((err, newBook) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(newBook);

    })


})

router.get('/', (req, res) => {
    Book.find().exec((err, nBooks) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(nBooks);
    })

})

router.delete('/:id', (req, res) => {
    Book.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});

    })
})

router.patch('/:id', (req, res) => {
    Book.findById(req.params.id, (err, nBooks) => {
        if (err)
            res.status(500).send(err);
        else if (!nBooks)
            res.status(404).send({});
        else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.subject = req.body.subject;
            book.price = req.body.price;
            book.publishingDate = req.body.publishingDate;
            book.publisher = req.body.publisher;
            book.publishingEmail = req.body.publishingEmail;
            book.publishingPhone = req.body.publishingPhone;
            nBooks.save((err, nBooks) => {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(nBooks);
            })

        }


    })
})

module.exports = router;