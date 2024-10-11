// controllers/updateController.js
const axios = require('axios');
const Update = require('../models/ttdModel');

// URL of the API endpoint
const url = 'https://ttdevasthanams.ap.gov.in/cms/api/universal-latest-updates?populate=*';

// Function to fetch and parse the latest updates
exports.getLatestUpdates = async (req, res) => {
    try {
        // Fetch data from the API
        const response = await axios.get(url);
        const updates = response.data.data;

        // Extract the relevant information
        const latestUpdates = updates.map(update => {
            return update.attributes.update.map(detail => ({
                id: detail.id,
                data: detail.data,
                cta: detail.cta,
                is_internal_redirection: detail.is_internal_redirection,
                redirectionLink: detail.redirectionLink
            }));
        }).flat();  // Flatten the array to have all updates in a single list

        // Wrap the updates in an object
        const responseObject = { latestUpdates: latestUpdates };

        // Send the latest updates as JSON response
        res.json(responseObject);
    } catch (error) {
        console.error('Error fetching latest updates:', error);
        // Send an error response if fetching fails
        res.status(500).json({ error: 'Error fetching latest updates' });
    }
};
