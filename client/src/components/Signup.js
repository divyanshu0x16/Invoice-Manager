import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import signupService from '../services/signup';
import loginService from '../services/login';
import invoiceService from '../services/invoices';

var tmpDate = new Date();
tmpDate.setDate(tmpDate.getDate() + 10);

const defaultInvoice = {
  date: new Date(),
  type: 'pending',
  items: [
    { name: 'Eggs', quantity: 10, price: 50 },
    { name: 'Books', quantity: 10, price: 150 },
  ],
  to: {
    address: 'XYZ',
    city: 'Delhi',
    country: 'India',
    postcode: '123456',
  },
  client: {
    name: 'Client',
    email: 'client@email.com',
    address: 'ABC Street',
    city: 'Mumbai',
    country: 'India',
    postcode: '987654',
    description: 'This is a demo invoice',
    terms: 10,
    date: tmpDate,
  },
};

export const FormElement = ({ name, value, setValue, error }) => {
  return (
    <div className="pb-6">
      <div className="text-all-bp font-semibold pb-1.5">{name}</div>
      <input
        type={name === 'Password' ? 'password' : 'text'}
        value={value}
        name={name}
        className="transition-colors duration-300 focus:border-all-bp dark:focus:border-all-bp pl-2 py-2 text-sm transition-colors duration-300 bg-white dark:bg-all-darkbg rounded-md dark:border-all-darkbg border-gray-300"
        onChange={({ target }) => setValue(target.value)}
      />
      <div className="text-red-500 pt-2 text-sm font-bold">{error}</div>
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  //Error Messages
  const [usernameError, setUserError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      if (username === '') {
        const errorMessage = { message: 'user empty' };
        throw errorMessage;
      } else if (name === '') {
        const errorMessage = { message: 'name empty' };
        throw errorMessage;
      } else if (password === '') {
        const errorMessage = { message: 'password empty' };
        throw errorMessage;
      }
      await signupService.signup({
        username,
        name,
        password,
      });
      //Login User
      const data = await loginService.login({ username, password });
      localStorage.setItem('userDetails', JSON.stringify(data));
      //Create Default Invoice
      await invoiceService.createInvoice(data.token, defaultInvoice);
      //Redirect
      setSuccess('User created. Redirecting...');
      setTimeout(() => {
        history.push('/login');
      }, 1000);
    } catch (error) {
      if (error.message.includes('user')) {
        setUserError('*Username cannot be empty');
        setTimeout(() => {
          setUserError('');
        }, 15000);
      } else if (error.message.includes('name')) {
        setNameError('*Name cannot be empty');
        setTimeout(() => {
          setNameError('');
        }, 15000);
      } else if (error.message.includes('password')) {
        setPasswordError('*Password cannot be empty');
        setTimeout(() => {
          setPasswordError('');
        }, 15000);
      } else if (error.message.includes(403)) {
        setPasswordError('*Password length must be greater than 3');
        setTimeout(() => {
          setPasswordError('');
        }, 15000);
      } else {
        setUserError('*Username must be unique');
        setTimeout(() => {
          setUserError('');
        }, 15000);
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center mx-auto min-h-screen"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1.0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="transition-colors duration-300 bg-white dark:bg-navbar-darkbg shadow-2xl rounded-xl">
        <div className="py-10 px-10">
          <form onSubmit={handleSignup}>
            <FormElement
              name="Username"
              value={username}
              setValue={setUsername}
              error={usernameError}
            />
            <FormElement
              name="Name"
              value={name}
              setValue={setName}
              error={nameError}
            />
            <FormElement
              name="Password"
              value={password}
              setValue={setPassword}
              error={passwordError}
            />
            <button
              type="submit"
              className="shadow-lg bg-all-bp text-white rounded-md px-4 py-2 font-bold transform duration-300 hover:scale-105"
            >
              Sign Up
            </button>
          </form>
          <Link to="/login">
            <div className="cursor-pointer font-medium text-all-bp pt-6 text-sm">
              Already a User?
            </div>
          </Link>
          <div className="text-green-500 text-sm font-bold pt-3">{success}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
