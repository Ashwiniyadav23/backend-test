const express = require('express');
const router = express.Router();
const Model = require('../models/models');

router.use(express.json());

router.post('/post', async (req, res) => {
    const dataToSave = new Model({
        name: req.body.name,
        email: req.body.email
    });
    try {
        const data = await dataToSave.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
