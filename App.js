const express = require('express');
const mongoose = require('mongoose');
const aboutRoutes = require('./routes/about');
const addcostRoutes = require('./routes/addcost');
const reportRoutes = require('./routes/report');
const User = require('./schemes/user'); 

const app = express();
const dbURI = 'mongodb://127.0.0.1';

// Set up MongoDB connection
mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });

    // Create a new user document
    const newUser = new User({
      id: 123123,
      first_name: 'moshe',
      last_name: 'israeli',
      birthday: new Date('1990-01-10')
    });
    // Save the new user document to the database
    newUser
      .save()
      .then(() => {
        console.log('Initial user document added to the database');
      })
      .catch((err) => {
        console.error(
          'Failed to add initial user document to the database',
          err
        );
      });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use(express.json());
// Define routes
app.use('/addcost', addcostRoutes);
app.use('/report', reportRoutes);
app.use('/about', aboutRoutes);


