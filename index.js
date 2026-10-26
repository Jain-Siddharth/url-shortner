const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connectMongoDB } = require('./connnection');

dotenv.config();

const url = process.env.MONGODB_URI;

connectMongoDB(url)
  .then(() => console.log("mongo db connected"))
  .catch((err) => console.log("Mongo db error", err));

const urlRoutes = require('./routes/url');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/url", urlRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});