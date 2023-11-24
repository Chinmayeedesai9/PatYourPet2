
require('dotenv').config({ path: 'api.env' });  // Specify the path to your api.env file
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Pat your Pet');
});

app.get('/getNearbyStores', async (req, res) => {
  try {
    const { latitude, longitude, type } = req.body;

    // Google Places API endpoint for nearby search
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=${type}&key=${GOOGLE_API_KEY}`;

    // Make a request to the Google Places API
    const response = await axios.get(apiUrl);

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching nearby stores:', error.message);
    res.status(500).json({ error: 'Error fetching nearby stores', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
