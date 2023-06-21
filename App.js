// dima voronov 321241119, ronen vishnivetsky 318552007
// import dependencies
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const aboutRoutes = require('./routes/aboutRoutes');
const addcostRoutes = require('./routes/addCostRoutes');
const reportRoutes = require('./routes/reportRoutes');

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());

// Set up MongoDB connection
mongoose
  .connect(process.env.MONGO_CONNECTION, {
    dbName: 'costDB',
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define routes
app.use('/addcost', addcostRoutes);
app.use('/report', reportRoutes);
app.use('/about', aboutRoutes);

// define app port 
app.listen(process.env.PORT, () => {
  console.log(`Server started on port http://localhost:${process.env.PORT}`);
});
