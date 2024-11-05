const express = require('express');
const router = express.Router();
const Movie = require('../model/Movie');

// CREATE a new movie
router.post('/', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// FIND all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// FIND a movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(404).json({
                error: 'Movie not found!'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// UPDATE a Movie by ID 
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Movie.update(req.body, {
            where: { movie_id: req.params.id}
        });
        if (updated) {
            const updatedMovie = await Movie.findByPk(req.params.id);
            res.status(200).json(updatedMovie);
        } else {
            res.status(404).json({
                error: 'Movie not found!'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// DELETE a Movie by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Movie.destroy({
            where: {movie_id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({
                error: 'Movie not found!'
            }); 
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
})

module.exports = router;