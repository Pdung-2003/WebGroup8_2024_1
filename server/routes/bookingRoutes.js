const express = require('express');
const router = express.Router();
const Booking = require('../model/Booking');
const User = require('../model/User');
const Schedule = require('../model/Schedule');

// CREATE a new Booking
router.post('/', async (req, res) => {
    try {
        const { user_id, schedule_id, total_price, booking_date } = req.body;
        
        // Kiểm tra xem user và schedule có tồn tại không
        const userExists = await User.findByPk(user_id);
        const scheduleExists = await Schedule.findByPk(schedule_id);

        if (!userExists || !scheduleExists) {
            return res.status(400).json({ error: 'User or Schedule not found' });
        }

        const newBooking = await Booking.create({ user_id, schedule_id, total_price, booking_date });
        res.status(201).json(newBooking);
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// READ all Bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [
                { model: User, attributes: ['name', 'email'] },
                { model: Schedule }
            ]
        });
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ error: 'Failed to retrieve bookings' });
    }
});

// READ a specific Booking by ID
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['name', 'email'] },
                { model: Schedule }
            ]
        });

        if (booking) {
            res.status(200).json(booking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (error) {
        console.error("Error fetching booking:", error);
        res.status(500).json({ error: 'Failed to retrieve booking' });
    }
});

// UPDATE a Booking by ID
router.put('/:id', async (req, res) => {
    try {
        const { user_id, schedule_id, total_price, booking_date } = req.body;

        // Kiểm tra xem booking có tồn tại không
        const bookingExists = await Booking.findByPk(req.params.id);
        if (!bookingExists) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        const [updated] = await Booking.update(
            { user_id, schedule_id, total_price, booking_date },
            { where: { booking_id: req.params.id } }
        );

        if (updated) {
            const updatedBooking = await Booking.findByPk(req.params.id);
            res.status(200).json(updatedBooking);
        } else {
            res.status(404).json({ error: 'Failed to update booking' });
        }
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ error: 'Failed to update booking' });
    }
});

// DELETE a Booking by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Booking.destroy({ where: { booking_id: req.params.id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (error) {
        console.error("Error deleting booking:", error);
        res.status(500).json({ error: 'Failed to delete booking' });
    }
});

module.exports = router;
