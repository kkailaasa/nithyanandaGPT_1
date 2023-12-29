const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for handling the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
