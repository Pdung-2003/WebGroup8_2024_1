const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sign Up
router.post('/signup', async (req, res) => {
    const {name, email, tel, password} = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }
        if (password.length < 8) {
            return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 8 ký tự' });
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await User.create({ name, email, tel, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error during sign-up:', error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            const field = error.errors[0].path.charAt(0).toUpperCase() + error.errors[0].path.slice(1);
            const message = `${field} này đã được sử dụng`;
            return res.status(400).json({ error: message });
        }

        res.status(500).json({ error: 'Internal server error' });
    }
});

// Sign In
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({
            where: {email}
        })
        if (!user) {
            return res.status(404).json({
                error: 'User not found!'
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign(
            {userId: user.user_id},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );
        res.json({
            success: true,
            message: 'Logged in successfully',
            token,
            user: {
                id: user.user_id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
})

// Middleware to auth token
// only authenticated users can enter certain routes
const authenticateToken = (req, res, next) => {
    // extract the token from Auth header
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }
    try {
        // verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

module.exports = { router, authenticateToken };
