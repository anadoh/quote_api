const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const { getQuoteByAuthor } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    const result = { quote: randomQuote }
    res.send(result);
});

app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person;
    if (person) {
        const quoteByAuthor = getQuoteByAuthor(person, quotes);
        const result = { quotes: quoteByAuthor };
        res.send(result);
    } else {
        const result = { quotes: quotes }
        res.send(result);
    }
});

app.post('/api/quotes', (req, res, next) => {
    const personNew = req.query.person;
    const quoteNew = req.query.quote;
    if (personNew && quoteNew) {
        const newQuote = { quote: quoteNew, person: personNew };
        quotes.push(newQuote);
        const result = { quote: newQuote };
        res.send(result);
    } else {
        res.status(400).send();
    }
});

