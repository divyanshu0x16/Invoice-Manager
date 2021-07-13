import React, { useState, useEffect } from 'react';
import loginService from '../services/login';
import { useHistory, Link } from 'react-router-dom';
import { FormElement } from './Signup';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const initialUser = JSON.parse(localStorage.getItem('userDetails'));
  const [user, setUser] = useState(initialUser);

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
      setUser(JSON.parse(localStorage.getItem('userDetails')));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto min-h-screen">
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
            <div className="pt-4">
              <button
                type="submit"
                className="shadow-lg bg-all-bp text-white rounded-md px-4 py-2 font-bold transform duration-300 hover:scale-105"
              >
                Login
              </button>
            </div>
          </form>
          <Link to="/signup">
            <div className="cursor-pointer font-medium text-all-bp pt-6 text-sm">
              New Here?
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
