const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');

const loginRouter = require('./controllers/login')

const app = express();

mongoose.set('useCreateIndex', true);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());

app.use('/api/login', loginRouter);


module.exports = app;
