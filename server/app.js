require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json())

// Index Route
app.get('/', (req, res ) => {
  res.send('Home');
});

app.listen(port, () => {
  console.log('Server Running on port '+ port);
})