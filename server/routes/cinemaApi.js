const express = require('express');
const router = express.Router();
const connection = require('../connection')

router.get('/getCinema', async function(req, res) {
    try {
        const query = 'SELECT * FROM Cinemas'
        connection.query(query, (err, result) => {
            if (err) {
                console.error('Error fetching cinemas: ', err);
                res.status(500).send({
                    message: 'Something went wrong!!!'
                })
                return;
            }
            res.json(result);
        });
    } catch(error) {
        console.error('Error: ', error);
        res.status(500).send({
            message: 'Something went wrong!!!'
        });
    }

});

router.post('/createCinema', async function(req, res) {
    const { name, location, phone, city, state } = req.body;
    const query = 'INSERT INTO Cinemas (name, location, phone, city, state) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [name, location, phone, city, state], (err, result) => {
        if (err) {
            console.error('Error creating cinema: ', err);
            res.status(500).send({
                message: 'Something went wrong!!!'
            });
            return;
        }
        res.status(201).send({
            message: 'Cinema created successfully',
            cinemaId: result.insertId
        });
    });
})

router.put('/updateCinema/:id', async (req, res) => {
    const cinemaId = req.params.id;
    const { name, location, phone, city, state } = req.body;
    const query = 'UPDATE Cinemas SET name = ?, location = ?, phone = ?, city = ?, state = ? WHERE cinema_id = ?';
    connection.query(query, [name, location, phone, city, state, cinemaId], (err, result) => {
        if (err) {
            console.error('Error updating cinema: ', err);
            res.status(500).send({
                message: 'Something went wrong!!!'
            });
            return;
        }
        res.send({
            message: 'Cinema updated successfully'
        });
    });
});

router.delete('/deleteCinema/:id', async (req, res) => {
    const cinemaId = req.params.id;
    const query = 'DELETE FROM Cinemas WHERE cinema_id = ?';
    connection.query(query, [cinemaId], (err, result) => {
        if (err) {
            console.error('Error deleting cinema: ', err);
            res.status(500).send({
                message: 'Something went wrong!!!'
            });
            return;
        }
        res.send({
            message: 'Cinema deleted successfully'
        });
    });
});

router.get('/findCinemaById/:id', async (req, res) => {
    const cinemaId = req.params.id;
    const query = 'SELECT * FROM Cinemas WHERE cinema_id = ?';
    connection.query(query, [cinemaId], (err, result) => {
        if (err) {
            console.error('Error finding cinema: ', err);
            res.status(500).send({
                message: 'Something went wrong!!!'
            });
            return;
        }
        res.json(result[0]);
    });
});

router.get('/findCinemaByName/:name', async (req, res) => {
    const cinemaName = req.params.name;
    const query = 'SELECT * FROM Cinemas WHERE name = ?';
    connection.query(query, [cinemaName], (err, result) => {
        if (err) {
            console.error('Error finding cinema: ', err);
            res.status(500).send({
                message: 'Something went wrong!!!'
            });
            return;
        }
        res.json(result);
    });
});


module.exports = router;