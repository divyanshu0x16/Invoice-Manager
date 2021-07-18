import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import invoiceService from '../services/invoices';
import { useHistory, Link } from 'react-router-dom';
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

const MarkPaid = ({ invoice, token, setInvoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }

  const markAsPaid = (invoice, token) => {
    invoice.type = 'paid';
    invoiceService
      .modifyInvoice(token, invoice)
      .then((data) => setInvoice(data));
  };

  if (invoice.type === 'paid') return null;
  else {
    return (
      <div
        onClick={() => markAsPaid(invoice, token)}
        className="shadow-lg cursor-pointer self-center bg-all-bp font-bold px-4 py-4 rounded-3xl text-white transform hover:scale-105 duration-300"
      >
        Mark As Paid
      </div>
    );
  }
};

const Element = () => {
  const invoiceId = useLocation().pathname.substring(9);
  const [invoice, setInvoice] = useState({});
  const history = useHistory();
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

  const deleteInvoice = () => {
    invoiceService
      .deleteInvoice(user.token, invoiceId)
      .then(() => history.push('/'));
  };

  return (
    <div className="md:mx-auto flex flex-col min-h-screen md:min-h-full">
      <motion.div
        className="mx-6"
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
              <div className="self-center pt-1 transform hover:scale-105 duration-300">
                Go Back
              </div>
            </div>
          </div>
        </Link>
        <div className="pt-4">
          <div className="grid grid-cols-2 bg-white dark:bg-navbar-darkbg py-4 rounded-lg shadow-lg">
            <div className="self-center pl-8 font-bold">Status</div>
            <div className="justify-self-end pr-8">
              {invoice.type === 'paid' ? <Paid /> : <Pending />}
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="transform-colors duration-300 bg-white dark:bg-navbar-darkbg rounded-lg px-8 py-4 shadow-lg">
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
      <div className="mt-auto transition-colors duration-300 bg-all-lightbg dark:bg-all-darkbg dark:text-white">
        <div className="flex flex-row-reverse space-x-4 px-8 bg-white dark:bg-navbar-darkbg py-4 md:hidden">
          <MarkPaid
            invoice={invoice}
            token={user.token}
            setInvoice={setInvoice}
          />
          <div></div>
          <div
            onClick={() => deleteInvoice()}
            className="shadow-lg cursor-pointer self-center bg-red-700 font-bold px-4 py-4 rounded-3xl text-white transform hover:scale-105 duration-300"
          >
            Delete
          </div>
          <div className="shadow-lg cursor-pointer self-center bg-item-lightbg font-bold dark:bg-item-darkbg px-4 py-4 rounded-3xl transform hover:scale-105 duration-300">
            Edit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
