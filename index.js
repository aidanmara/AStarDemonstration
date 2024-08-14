const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

require('dotenv').config();

const mapsAPIKEY = process.env.GOOGLE_MAPS_API_KEY;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  let astarPath = path.join(__dirname, 'public', 'astar.html');
  fs.readFile(astarPath, 'utf8', (err, data) => {
      if (err) {
          return res.status(500).send('An error occurred while loading the page.');
      }
      data = data.replace('{{API_KEY}}', mapsAPIKEY);
      res.send(data);
  });
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'p                                                                                                                                                                                                                                                                                                                                                                                                                                                         blic', 'about.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});