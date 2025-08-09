
const express = require('express');
const app = express();

// Port will be taken from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from my custom Node.js app with CI/CD!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
