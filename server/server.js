const express = require('express');
const cors = require('cors')
const connection = require('./connectionMySQL');
require('dotenv').config();
const cinemaApi = require('./routes/cinemaApi');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/cinema', cinemaApi);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
