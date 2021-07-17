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
  console.log(invoice);
  return (
    <div>
      <div>{invoice.to.address}</div>
      <div>{invoice.to.city}</div>
      <div>{invoice.to.country}</div>
      <div>{invoice.to.postcode}</div>
    </div>
  );
};

export const InvoiceDate = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="text-xs">Invoice Date</div>
      <div className="font-bold text-sm pt-1.5">
        {moment(invoice.date).format('Do MMM YY')}
      </div>
    </div>
  );
};

export const PaymentDue = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="text-xs">Payment Due</div>
      <div className="font-bold text-sm pt-1.5">
        {moment(invoice.client.date).format('Do MMM YY')}
      </div>
    </div>
  );
};

export const SentTo = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>Sent To</div>
      <div className="font-bold text-sm">{invoice.client.email}</div>
    </div>
  );
};

export const BillTo = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>Bill To</div>
      <div className="text-sm font-bold pt-1.5 pb-1">{invoice.client.name}</div>
      <div>{invoice.client.address}</div>
      <div>{invoice.client.city}</div>
      <div>{invoice.client.country}</div>
      <div>{invoice.client.postcode}</div>
    </div>
  );
};
