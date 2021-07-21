import React, { useState, useEffect } from 'react';
import loginService from '../services/login';
import { useHistory, Link } from 'react-router-dom';
import { FormElement } from './Signup';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const initialUser = JSON.parse(localStorage.getItem('userDetails'));
  const [user, setUser] = useState(initialUser);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (user !== null) {
      history.push('/');
    }
  }, [user, history]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const credentials = {
        username,
        password,
      };
      const data = await loginService.login(credentials);
      localStorage.setItem('userDetails', JSON.stringify(data));
      setUsername('');
      setPassword('');
      setError('');
      setSuccess('Login successfull :D');
      setTimeout(() => {
        setUser(JSON.parse(localStorage.getItem('userDetails')));
      }, 1000);
    } catch (error) {
      setError(`Wrong Credentials :(`);
      setTimeout(() => {
        setError('');
      }, 15000);
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
          <form onSubmit={handleLogin}>
            <FormElement
              name="Username"
              value={username}
              setValue={setUsername}
            />
            <FormElement
              name="Password"
              value={password}
              setValue={setPassword}
            />
            <button
              type="submit"
              className="shadow-lg bg-all-bp text-white rounded-md px-4 py-2 font-bold transform duration-300 hover:scale-105"
            >
              Login
            </button>
          </form>
          <Link to="/signup">
            <div className="cursor-pointer font-medium text-all-bp pt-6 text-sm">
              New Here?
            </div>
          </Link>
          <div className="text-green-500 text-sm font-bold pt-3">{success}</div>
          <div className="text-red-500 text-sm font-bold pt-3">{error}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
