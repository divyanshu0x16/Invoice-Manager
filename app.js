const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');


const loginRouter = require('./controllers/login');
const invoiceRouter = require('./controllers/invoices')

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

app.use('/api/invoices', invoicesRouter);
app.use('/api/login', loginRouter);

module.exports = app;
