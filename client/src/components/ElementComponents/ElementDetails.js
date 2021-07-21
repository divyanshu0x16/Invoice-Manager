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
      <div className="font-bold text-xs">
        {invoice.client.email}
      </div>
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

const Items = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        index += 1;
        return (
          <div
            key={index}
            className="transform-colors duration-300 bg-item-lightbg font-bold dark:bg-item-darkbg text-sm grid grid-cols-2 md:grid-cols-4 py-4"
          >
            <div className="self-center pl-6">{item.name}</div>
            <div className="justify-self-center hidden md:block self-center">
              {item.quantity}
            </div>
            <div className="justify-self-center hidden md:block self-center">
              {item.price}
            </div>
            <div className="justify-self-end self-center pr-6">
              <i className="fas fa-rupee-sign"></i>
              {` ${item.price} x ${item.quantity}`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Item = ({ invoice }) => {
  if (Object.keys(invoice).length === 0 && invoice.constructor === Object) {
    return <div>Loading...</div>;
  }

  let amount = 0;
  invoice.items.forEach((item) => {
    amount += item.price * item.quantity;
  });

  return (
    <div>
      <div className="transform-colors duration-300 bg-item-lightbg font-bold dark:bg-item-darkbg text-sm rounded-t-lg grid grid-cols-2 md:grid-cols-4 py-4">
        <div className="self-center pl-6 font-thin">Item Name</div>
        <div className="justify-self-center hidden md:block self-center font-thin">
          Quantity
        </div>
        <div className="justify-self-center hidden md:block self-center font-thin">
          Price
        </div>
        <div className="justify-self-end self-center pr-6 font-thin">Total</div>
      </div>
      <Items items={invoice.items} />
      <div className="transform-colors duration-300 bg-item-lighttotal font-bold dark:bg-item-darktotal text-white text-sm rounded-b-lg grid grid-cols-2 py-8">
        <div className="self-center pl-6">Amount Due</div>
        <div className="justify-self-end self-center pr-6 text-xl">
          <i className="fas fa-rupee-sign"></i>
          {amount}
        </div>
      </div>
    </div>
  );
};
