const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url');

dotenv.config();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});