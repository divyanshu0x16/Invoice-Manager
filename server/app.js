require('express-async-errors');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');

const loginRouter = require('./controllers/login');
const invoiceRouter = require('./controllers/invoices');
const usersRouter = require('./controllers/users');

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
app.use(middleware.tokenExtractor);
app.use(express.static('build'));

app.use('/api/invoices', invoiceRouter);
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);

app.use(middleware.errorHandler);

module.exports = app;
