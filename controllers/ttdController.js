// controllers/updateController.js
const axios = require('axios');
const Update = require('../models/ttdModel');

// URL of the API endpoint
const url = 'https://ttdevasthanams.ap.gov.in/cms/api/universal-latest-updates';

// Function to fetch and parse the latest updates
exports.getLatestUpdates = async (req, res) => {
    try {
        // Fetch data from the API
        const response = await axios.get(url);
        const updates = response.data.data;

        // Extract relevant information
        const latestUpdates = updates.map(update => {
            return new Update(
                update.id,
                update.attributes.tag,
                update.attributes.data,
                new Date(update.attributes.publishedAt)
            );
        });

        // Send the latest updates as JSON response
        res.json(latestUpdates);
    } catch (error) {
        console.error('Error fetching latest updates:', error);
        // Send an error response if fetching fails
        res.status(500).json({ error: 'Error fetching latest updates' });
    }
};
