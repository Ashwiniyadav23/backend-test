const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const Routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4004;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

mongoose.connect(mongoString);
const result = mongoose.connection;

result.on('error', (error) => {
    console.log(error);
});

result.once('connected', () => {
    console.log('Database connected');
});

app.use('/api', Routes);
