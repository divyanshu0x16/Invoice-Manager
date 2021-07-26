import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import invoiceService from '../../services/invoices';

const FullEntryField = ({ inputClass, title, value, setValue, name }) => {
  return (
    <div className="mt-4 pl-0.5">
      <div className="text-xs">{title}</div>
      <div className="mt-1.5 mr-10">
        <input
          type="text"
          className={inputClass}
          value={value}
          name={name}
          onChange={({ target }) => setValue(target.value)}
        />
      </div>
    </div>
  );
};

const HalfEntryFields = ({
  inputClass,
  titleOne,
  titleTwo,
  valueOne,
  valueTwo,
  setValueOne,
  setValueTwo,
  nameOne,
  nameTwo,
}) => {
  return (
    <div className="grid grid-cols-2 mt-4 text-xs">
      <div>
        <div className="text-xs">{titleOne}</div>
        <div className="mt-1.5 mr-6">
          <input
            className={inputClass}
            value={valueOne}
            name={nameOne}
            onChange={({ target }) => setValueOne(target.value)}
          />
        </div>
      </div>
      <div>
        <div className="text-xs">{titleTwo}</div>
        <div className="mt-1.5 mr-10 text-xs">
          <input
            className={inputClass}
            value={valueTwo}
            name={nameTwo}
            onChange={({ target }) => setValueTwo(target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const deleteItem = (index, items) => {
  let toReturn = [];
  for (let i = 0; i < items.length; i++) {
    if (i !== index) toReturn.push(items[i]);
  }

  return toReturn;
};

const ItemForm = ({ inputClass, index, items, setItems }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleChange = (name, quantity, price) => {
    items[index].name = name;
    items[index].quantity = quantity;
    items[index].price = price;
    setItems(items);
  };

  return (
    <div>
      <div className="ml-0.5 mt-4">
        <div className="text-xs">Item Name</div>
        <div className="mt-1.5 mr-10">
          <input
            type="text"
            className={inputClass}
            value={name}
            name="name"
            onChange={({ target }) => {
              setName(target.value);
              handleChange(target.value, quantity, price);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4">
        <div>
          <div className="text-xs">Qty.</div>
          <div className="mt-1.5 mr-10 text-xs">
            <input
              className={inputClass}
              value={quantity}
              onChange={({ target }) => {
                setQuantity(target.value);
                handleChange(name, target.value, price);
              }}
            />
          </div>
        </div>
        <div>
          <div className="text-xs">Price</div>
          <div className="mt-1.5 mr-10 text-xs">
            <input
              className={inputClass}
              value={price}
              onChange={({ target }) => {
                setPrice(target.value);
                handleChange(name, quantity, target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div className="text-xs">Total</div>
          <div className="mt-1.5 mr-10 text-sm font-bold flex justify-between">
            <div className="mt-3">{quantity * price}</div>
            <i
              onClick={() => setItems(deleteItem(index, items))}
              className="cursor-pointer self-center mt-2 mr-4 fa-lg fas fa-trash duration-200 hover:text-red-500"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = ({ setForm, token, setInvoices, invoices, setBodyClass }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [items, setItems] = useState([]);
  //Bill To
  const [toStreet, setToStreet] = useState('');
  const [toCity, setToCity] = useState('');
  const [toCountry, setCountry] = useState('');
  const [toPostcode, setToPostcode] = useState('');
  //Client
  const [clientName, setClientName] = useState('');
  const [clientMail, setClientMail] = useState('');
  const [clientStreet, setClientStreet] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientPostcode, setClientPostcode] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  const [description, setDescription] = useState('');
  const [daysTill, setDaysTill] = useState(0);
  //Error
  const [error, setError] = useState(false);

  const inputClass =
    'w-full h-10 text-xs font-bold transition-colors duration-300 pl-2 rounded-md dark:bg-item-darkbg dark:border-all-darkbg border-gray-300 border-2 focus:border-all-bp dark:focus:border-all-bp focus:outline-none';

  const handleSubmit = (event) => {
    event.preventDefault();
    toDate.setDate(toDate.getDate() + parseInt(daysTill));

    if (items.length === 0) {
      setError(true);
      return;
    }

    let flag = 0;
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      if (Object.keys(element).length === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      setError(true);
      return;
    }

    const invoice = {
      date: startDate,
      type: 'pending',
      items,
      to: {
        address: toStreet,
        city: toCity,
        country: toCountry,
        postcode: toPostcode,
      },
      client: {
        name: clientName,
        email: clientMail,
        address: clientStreet,
        city: clientCity,
        country: clientCountry,
        postcode: clientPostcode,
        description,
        date: toDate,
        terms: daysTill,
      },
    };

    invoiceService.createInvoice(token, invoice).then((data) => {
      setInvoices(invoices.concat(data));
      setToCity('');
      setToStreet('');
      setToPostcode('');
      setCountry('');
      setClientName('');
      setClientMail('');
      setClientStreet('');
      setClientCity('');
      setClientCountry('');
      setDaysTill(0);
      setDescription('');
      setClientPostcode('');
      setItems([]);
      setError(false);
      setBodyClass('mx-6 md:mx-auto min-h-screen');
      setForm(
        'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
      );
    });
  };

  return (
    <div className="md:w-element flex flex-col justify-between max-h-screen">
      <form className="mx-8 mt-8 overflow-y-auto" onSubmit={handleSubmit}>
        <div>
          <div className="text-3xl font-bold">Create Invoice</div>
          <section className="mt-6">
            <div className="text-sm text-all-bp font-bold">Bill From</div>
            <FullEntryField
              inputClass={inputClass}
              title="Street Address"
              value={toStreet}
              setValue={setToStreet}
              name="tostreetAddress"
            />
            <HalfEntryFields
              inputClass={inputClass}
              titleOne="City"
              valueOne={toCity}
              setValueOne={setToCity}
              nameOne="toCity"
              titleTwo="Post Code"
              valueTwo={toPostcode}
              setValueTwo={setToPostcode}
              nameTwo={toPostcode}
            />
            <FullEntryField
              inputClass={inputClass}
              title="Country"
              value={toCountry}
              setValue={setCountry}
              name="tocountry"
            />
          </section>

          <section className="mt-6">
            <div className="text-sm text-all-bp font-bold">Bill To</div>
            <FullEntryField
              inputClass={inputClass}
              title="Client's Name"
              value={clientName}
              setValue={setClientName}
              name="clientName"
            />
            <FullEntryField
              inputClass={inputClass}
              title="Client's Email"
              value={clientMail}
              setValue={setClientMail}
              name="clientMail"
            />
            <FullEntryField
              inputClass={inputClass}
              title="Street Address"
              value={clientStreet}
              setValue={setClientStreet}
              name="clientStreet"
            />
            <HalfEntryFields
              inputClass={inputClass}
              titleOne="City"
              valueOne={clientCity}
              setValueOne={setClientCity}
              nameOne="clientCity"
              titleTwo="Post Code"
              valueTwo={clientPostcode}
              setValueTwo={setClientPostcode}
              nameTwo="clientPostcode"
            />
            <FullEntryField
              inputClass={inputClass}
              title="Country"
              value={clientCountry}
              setValue={setClientCountry}
              name="clientCountry"
            />
            <div className="grid grid-cols-2 mt-4 text-xs">
              <div>
                <div className="text-xs">Invoice Date</div>
                <div className="mr-6 pt-1.5 ml-0.5">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setToDate(date);
                    }}
                    dateFormat="dd/MM/yyyy"
                    className="w-full h-10 text-xs font-bold transition-colors duration-300 rounded-md dark:bg-item-darkbg dark:border-all-darkbg border-gray-300 border-2 focus:border-all-bp dark:focus:border-all-bp focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <div className="text-xs">Total Days Till Payment</div>
                <div className="mt-1.5 mr-10 text-xs">
                  <input
                    className={inputClass}
                    type="number"
                    value={daysTill}
                    name="daysTill"
                    onChange={({ target }) => setDaysTill(target.value)}
                  />
                </div>
              </div>
            </div>
            <FullEntryField
              inputClass={inputClass}
              title="Description"
              value={description}
              setValue={setDescription}
              name="description"
            />
          </section>

          <section>
            <div className="mt-8 font-bold text-2xl">Item List</div>
            {items.map((item, index) => {
              return (
                <ItemForm
                  inputClass={inputClass}
                  key={index}
                  items={items}
                  index={index}
                  setItems={setItems}
                />
              );
            })}
            <div className="mt-6 mb-4 mr-10 ml-4">
              <div
                onClick={() => {
                  setItems(items.concat({}));
                }}
                className="shadow-lg text-center cursor-pointer self-center bg-item-lightbg font-bold text-xs dark:bg-item-darkbg px-4 py-4 rounded-3xl transform hover:scale-105 duration-300"
              >
                + Add New Item
              </div>
            </div>
          </section>

          {error === true ? (
            <section className="text-xs text-red-400 font-bold">
              <div> - Minimum one item is needed</div>
            </section>
          ) : null}
        </div>
        <div className="sticky mr-8 flex justify-between pb-6 mt-6">
          <div
            onClick={() => {
              setToCity('');
              setToStreet('');
              setToPostcode('');
              setCountry('');
              setClientName('');
              setClientMail('');
              setClientStreet('');
              setClientCity('');
              setClientCountry('');
              setDaysTill(0);
              setDescription('');
              setClientPostcode('');
              setItems([]);
              setError(false);
              setBodyClass('mx-6 md:mx-auto min-h-screen');
              setForm(
                'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
              );
            }}
            className="ml-1 shadow-lg cursor-pointer self-center bg-item-lightbg font-bold dark:bg-item-darkbg px-4 py-4 rounded-3xl transform hover:scale-105 duration-300"
          >
            Discard
          </div>
          <button
            type="submit"
            className="mr-2 shadow-lg cursor-pointer self-center transform hover:scale-105 duration-300 bg-all-bp text-white font-bold rounded-3xl"
          >
            <div className="py-4 px-4">Save</div>
          </button>
        </div>
      </form>
    </div>
  );
};

const NewInvoiceForm = ({
  form,
  setForm,
  token,
  setInvoices,
  invoices,
  setBodyClass,
}) => {
  return (
    <div className={form}>
      <div className="flex mt-16 md:mt-0">
        <div className="flex-grow md:flex-grow-0 transition-colors duration-300  md:ml-24 bg-all-lightbg dark:bg-all-darkbg dark:text-white w-max min-h-screen">
          <Form
            setForm={setForm}
            token={token}
            setInvoices={setInvoices}
            invoices={invoices}
            setBodyClass={setBodyClass}
          />
        </div>
        <div
          onClick={() => {
            setBodyClass('mx-6 md:mx-auto min-h-screen');
            setForm(
              'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
            );
          }}
          className="hidden md:block flex-grow backdrop-filter backdrop-brightness-50"
        ></div>
      </div>
    </div>
  );
};

export default NewInvoiceForm;
