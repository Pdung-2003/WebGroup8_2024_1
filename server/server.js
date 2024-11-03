const express = require('express');
const cors = require('cors')
const connection = require('./connectionMySQL');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/test', (req, res) => {
    connection.query('SELECT * FROM User', (error, results) => {
        if (error) {
            return res.status(500).send('Database query failed: ' + error);
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
