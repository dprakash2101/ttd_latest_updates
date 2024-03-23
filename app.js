// app.js
const express = require('express');
const updateController = require('./controllers/ttdController');
const app = express();

// Route for fetching latest updates
app.get('/latest-updates', updateController.getLatestUpdates);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
