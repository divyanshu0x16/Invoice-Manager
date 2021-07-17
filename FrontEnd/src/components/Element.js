import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import invoiceService from '../services/invoices';

const jwt = require('jsonwebtoken');
require('dotenv').config();

const Element = () => {
  const invoiceId = useLocation().pathname.substring(9);
  const [invoice, setInvoice] = useState({});
  const user = JSON.parse(localStorage.getItem('userDetails'));

  useEffect(() => {
    if (user !== null) {
      invoiceService
        .getSingleInvoice(user.token, invoiceId)
        .then((data) => setInvoice(data));
    }
  }, [invoiceId, user]);

  if (user === null) {
    return <Redirect to="/login" />;
  }

  jwt.verify(user.token, process.env.REACT_APP_SECRET, (err) => {
    if (err) {
      localStorage.clear();
    }
  });

  return <div>Hi this is the element</div>;
};

export default Element;
