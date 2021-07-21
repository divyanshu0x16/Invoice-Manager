const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
  to: {
    address: String,
    city: String,
    country: String,
    postcode: Number,
  },
  client: {
    name: String,
    email: String,
    address: String,
    city: String,
    postcode: Number,
    country: String,
    date: Date,
    terms: Number,
    description: String,
  },
  items: [{ name: String, quantity: Number, price: Number }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: Date,
  type: String,
});

invoiceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Invoice', invoiceSchema);
