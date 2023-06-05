const express = require('express');
const mongoose = require('mongoose');
const aboutRoutes = require('./routes/about');
const addcostRoutes = require('./routes/addcost');
const reportRoutes = require('./routes/report');

const app = express();

app.use('/addcost', addcostRoutes);
app.use('/report', reportRoutes);
app.use('/about', aboutRoutes);


app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  });

module.exports = app;

