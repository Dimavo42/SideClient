const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const aboutRoutes = require('./routes/aboutRoutes');
const addcostRoutes = require('./routes/addCostRoutes');
const reportRoutes = require('./routes/reportRoutes');
const User = require('./schemas/user');

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());

// Set up MongoDB connection
mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/addcost', addcostRoutes);
app.use('/report', reportRoutes);
app.use('/about', aboutRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server started on port 3000');
});

/////////////////////////////// Create a new user document
// const newUser = new User({
//   id: 123123,
//   first_name: 'moshe',
//   last_name: 'israeli',
//   birthday: new Date('1990-01-10'),
// });
//////////////////////////////// Save the new user document to the database
//   newUser
//     .save()
//     .then(() => {
//       console.log('Initial user document added to the database');
//     })
//     .catch((err) => {
//       console.error(
//         'Failed to add initial user document to the database',
//         err
//       );
//     });
// })
// .catch((err) => {
//   console.error('Failed to connect to MongoDB', err);
// });
