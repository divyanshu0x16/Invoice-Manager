import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Dashboard/Header';
import importService from '../services/invoices';

const jwt = require('jsonwebtoken');
require('dotenv').config();

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);
  const user = JSON.parse(localStorage.getItem('userDetails'));

  useEffect(() => {
    if (user !== null) {
      importService
        .getInvoices(user.token)
        .then((data) => {
          setInvoices(data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  if (user === null) {
    return <Redirect to="/login" />;
  }

  jwt.verify(user.token, process.env.REACT_APP_SECRET, (err) => {
    if (err) {
      localStorage.clear();
    }
  });

  return (
    <>
      <Header invoices={invoices} />
    </>
  );
};

export default Dashboard;
