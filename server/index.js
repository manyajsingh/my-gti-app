const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://manyasachdeva:Rastino%402005@cluster0.jr5lj.mongodb.net/mernapp?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define a schema
const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Data = mongoose.model('Data', DataSchema);

// API Routes
app.get('/api/data', async (_req, res) => {
    const data = await Data.find();
    res.json(data);
});

app.post('/api/data', async (req, res) => {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
