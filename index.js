require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', require('./routers/main'));

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

const handleError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};
app.use(handleError);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});