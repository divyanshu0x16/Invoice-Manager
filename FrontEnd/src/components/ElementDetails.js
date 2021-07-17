import React from 'react';
import moment from 'moment';

export const Pending = () => {
  return (
    <div className="transition-colors duration-300 bg-pending-bg dark:bg-pending-darkbg text-pending-text font-bold text-sm py-2 px-5 rounded-lg">
      Pending
    </div>
  );
};

export const Paid = () => {
  return (
    <div className="transition-colors duration-300 bg-paid-bg dark:bg-paid-darkbg text-paid-text font-bold text-sm py-2 px-5 rounded-lg">
      Paid
    </div>
  );
};

export const Description = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return <div>{invoice.client.description}</div>;
};

export const Address = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return <div>{invoice.to.city}</div>;
};

export const InvoiceDate = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return <div>{moment(invoice.date).format('Do MMM YY')}</div>;
};

export const PaymentDue = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return <div>{moment(invoice.client.date).format('Do MMM YY')}</div>;
};

export const SentTo = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return <div>{invoice.client.email}</div>;
};

export const BillTo = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return <div>{invoice.to.city}</div>;
};
