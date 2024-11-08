const express = require('express');
const cors = require('cors');
require('dotenv').config();

const cinemaRoutes = require('./routes/cinemaRoutes');
const roomRoutes = require('./routes/roomRoutes'); 
const movieRoutes = require('./routes/movieRoutes')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/cinema', cinemaRoutes);
app.use('/room', roomRoutes); 
app.use('/movie', movieRoutes);
app.use('booking', bookingRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
