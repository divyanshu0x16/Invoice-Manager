import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FullEntryField = ({ inputClass, title, value, setValue, name }) => {
  return (
    <div className="mt-4">
      <div className="text-xs">{title}</div>
      <div className="mt-3 mr-10">
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
        <div className="mt-3 mr-6">
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
        <div className="mt-3 mr-10 text-xs">
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
  return (
    <div>
      <FullEntryField inputClass={inputClass} title="Item Name" />
      <div className="grid grid-cols-3 mt-4">
        <div>
          <div className="text-xs">Qty.</div>
          <div className="mt-3 mr-10 text-xs">
            <input className={inputClass} />
          </div>
        </div>
        <div>
          <div className="text-xs">Price</div>
          <div className="mt-3 mr-10 text-xs">
            <input className={inputClass} />
          </div>
        </div>
        <div>
          <div className="text-xs">Total</div>
          <div className="mt-3 mr-10 text-sm font-bold flex justify-between">
            <div className="mt-3">3</div>
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

const Form = ({ setForm }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [items, setItems] = useState([]);
  //Bill To
  const [toStreet, setToStreet] = useState('');
  const [toCity, setToCity] = useState('');
  const [toCountry, setCountry] = useState('');
  const [toPostcode, setToPostcode] = useState('');

  const inputClass =
    'w-full h-10 text-xs font-bold transition-colors duration-300 pl-2 rounded-md dark:bg-item-darkbg dark:border-all-darkbg border-gray-300 border-2 focus:border-all-bp dark:focus:border-all-bp focus:outline-none';

  return (
    <div className="md:w-element flex flex-col justify-between max-h-screen">
      <div className="mx-8 mt-8 overflow-y-scroll">
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
          <FullEntryField inputClass={inputClass} title="Client's Name" />
          <FullEntryField inputClass={inputClass} title="Client's Email" />
          <FullEntryField inputClass={inputClass} title="Street Address" />
          <HalfEntryFields
            inputClass={inputClass}
            titleOne="City"
            titleTwo="Post Code"
          />
          <FullEntryField inputClass={inputClass} title="Country" />
          <div className="grid grid-cols-2 mt-4 text-xs">
            <div className>
              <div className="text-xs">Invoice Date</div>
              <div className="mr-6 pt-3">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full h-10 text-xs font-bold transition-colors duration-300 rounded-md dark:bg-item-darkbg dark:border-all-darkbg border-gray-300 border-2 focus:border-all-bp dark:focus:border-all-bp focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="text-xs">Total Days Till Payment</div>
              <div className="mt-3 mr-10 text-xs">
                <input className={inputClass} type="number" />
              </div>
            </div>
          </div>
          <FullEntryField inputClass={inputClass} title="Description" />
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
                setItems(items.concat(1));
              }}
              className="shadow-lg text-center cursor-pointer self-center bg-item-lightbg font-bold text-xs dark:bg-item-darkbg px-4 py-4 rounded-3xl transform hover:scale-105 duration-300"
            >
              + Add New Item
            </div>
          </div>
        </section>
      </div>
      <div className="sticky mx-8 flex justify-between pb-6 mt-6">
        <div
          onClick={() =>
            setForm(
              'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
            )
          }
          className="shadow-lg cursor-pointer self-center bg-item-lightbg font-bold dark:bg-item-darkbg px-4 py-4 rounded-3xl transform hover:scale-105 duration-300"
        >
          Discard
        </div>
        <div className="mr-14 shadow-lg cursor-pointer self-center transform hover:scale-105 duration-300 bg-all-bp text-white font-bold rounded-3xl">
          <div className="py-4 px-4">Save</div>
        </div>
      </div>
    </div>
  );
};

const NewInvoiceForm = ({ form, setForm }) => {
  return (
    <div className={form}>
      <div className="flex mt-16 md:mt-0">
        <div className="flex-grow md:flex-grow-0 transition-colors duration-300  md:ml-24 bg-all-lightbg dark:bg-all-darkbg dark:text-white w-max min-h-screen">
          <Form setForm={setForm} />
        </div>
        <div
          onClick={() =>
            setForm(
              'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
            )
          }
          className="hidden md:block flex-grow backdrop-filter backdrop-brightness-50"
        ></div>
      </div>
    </div>
  );
};

export default NewInvoiceForm;
