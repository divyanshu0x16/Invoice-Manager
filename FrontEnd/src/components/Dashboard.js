import React, { useState, useEffect, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Header from './Dashboard/Header';
import invoiceService from '../services/invoices';
import { Paid, Pending } from './Dashboard/Elements';
import { motion } from 'framer-motion';
import moment from 'moment';

const jwt = require('jsonwebtoken');
require('dotenv').config();

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);
  const user = JSON.parse(localStorage.getItem('userDetails'));
  const allInvoices = useRef(null);

  useEffect(() => {
    if (user !== null) {
      invoiceService
        .getInvoices(user.token)
        .then((data) => {
          allInvoices.current = data;
          setInvoices(data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  const applyFilter = (type) => {
    if (type !== 'all') {
      setInvoices(
        allInvoices.current.filter((invoice) => invoice.type === type)
      );
    } else {
      setInvoices(allInvoices.current);
    }
  };

  if (user === null) {
    return <Redirect to="/login" />;
  }

  jwt.verify(user.token, process.env.REACT_APP_SECRET, (err) => {
    if (err) {
      localStorage.clear();
    }
  });

  return (
    <div className="mx-6 md:mx-auto">
      <Header invoices={allInvoices.current} applyFilter={applyFilter} />
      <motion.div
        className="pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {invoices.map((invoice) => {
          let amount = 0;
          invoice.items.forEach((item) => {
            amount += item.price;
          });

          const path = '/invoice/' + invoice.id;

          if (invoice.type === 'pending') {
            return (
              <Link to={path} key={invoice.id}>
                <Pending
                  name={invoice.client.name}
                  amount={amount}
                  date={moment(invoice.client.date).format('Do MMM YY')}
                />
              </Link>
            );
          }
          return (
            <Link to={path} key={invoice.id}>
              <Paid
                name={invoice.client.name}
                amount={amount}
                key={invoice.id}
                date={moment(invoice.client.date).format('Do MMM YY')}
              />
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Dashboard;
