// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

// Start the server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});