const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
app.use(express.json());
app.use(express.static('public'));

app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);

const movieRoutes = require('./api/movie/movie.routes');

app.use('/api/movie', movieRoutes);

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3030;
http.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
