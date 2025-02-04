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

router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`your email ${data.email} has been deleted..`)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
            id = req.params.id 
            updatedData = req.body 
            options =  { new: true } 
        
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;
