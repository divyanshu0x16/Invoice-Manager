import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import invoiceService from '../services/invoices';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeftIcon } from '@heroicons/react/solid';

import {
  Pending,
  Paid,
  Description,
  Address,
  InvoiceDate,
  PaymentDue,
  BillTo,
  SentTo,
  Item,
} from './ElementDetails';

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (user === null) {
    return <Redirect to="/login" />;
  }

  jwt.verify(user.token, process.env.REACT_APP_SECRET, (err) => {
    if (err) {
      localStorage.clear();
    }
  });

  return (
    <motion.div
      className="mx-6 md:mx-auto"
      initial={{ scale: 1.0, opacity: 0.5 }}
      animate={{ scale: 1.0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to={'/'}>
        <div className="lg:pt-24 md:pt-16 pt-8 text-sm hover:">
          <div className="flex">
            <div className="self-center">
              <ChevronLeftIcon className="text-all-bp h-8 w-8" />
            </div>
            <div className="self-center pt-1 transform hover:scale-105">Go Back</div>
          </div>
        </div>
      </Link>
      <div className="pt-4">
        <div className="grid grid-cols-2 bg-white dark:bg-navbar-darkbg py-4 rounded-lg">
          <div className="self-center pl-8 font-bold">Status</div>
          <div className="justify-self-end pr-8">
            {invoice.type === 'paid' ? <Paid /> : <Pending />}
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="transform-colors duration-300 bg-white dark:bg-navbar-darkbg rounded-lg px-8 py-4">
          <div className="text-xs font-normal">
            <Description invoice={invoice} />
          </div>
          <div>
            <div className="py-6 text-xs">
              <Address invoice={invoice} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div>
                <InvoiceDate invoice={invoice} />
              </div>
              <div className="text-xs pt-3">
                <PaymentDue invoice={invoice} />
              </div>
            </div>
            <div className="text-xs">
              <BillTo invoice={invoice} />
            </div>
          </div>
          <div className="text-xs py-8">
            <SentTo invoice={invoice} />
          </div>
          <div className="pt-4">
            <Item invoice={invoice} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Element;
