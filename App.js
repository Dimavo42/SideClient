const express = require('express');
const mongoose = require('mongoose');
const aboutRoutes = require('./routes/about');
const addcostRoutes = require('./routes/addcost');
const reportRoutes = require('./routes/report');

const app = express();
const dbURI = 'mongodb://127.0.0.1';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use('/addcost', addcostRoutes);
app.use('/report', reportRoutes);
app.use('/about', aboutRoutes);


app.use(express.json());
app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Internal server error' });
  });

module.exports = app;

