const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const updateController = require('./controllers/ttdController');

const app = express();
app.use(cors());

// Serve static dashboard from /public
app.use(express.static(path.join(__dirname, 'public')));

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.get('/latest-updates', updateController.getLatestUpdates);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Dashboard UI:           http://localhost:${PORT}/`);
    console.log(`API endpoint:           http://localhost:${PORT}/latest-updates`);
    console.log(`Swagger documentation:  http://localhost:${PORT}/api-docs`);
});
