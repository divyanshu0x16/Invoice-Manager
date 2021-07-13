import React, { useState } from 'react';
import signupService from '../services/signup';
import { useHistory } from 'react-router-dom';

export const FormElement = ({ name, value, setValue }) => {
  return (
    <div className="pb-6">
      <div className="text-all-bp font-semibold pb-1.5">{name}</div>
      <input
        type={name === 'Password' ? 'password' : 'text'}
        value={value}
        name={name}
        className="transition-colors duration-500 focus:border-all-bp pl-2 py-2 text-sm transition-colors duration-300 bg-white dark:bg-all-darkbg rounded-md dark:border-all-darkbg border-gray-300"
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signupService.signup({
        username,
        name,
        password,
      });
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
  //TODO: Add Form Error message. Currently there's no message if user input's wrong message
  return (
    <div className="flex flex-col justify-center items-center mx-auto min-h-screen">
      <div className="transition-colors duration-300 bg-white dark:bg-navbar-darkbg shadow-2xl rounded-xl">
        <div className="py-10 px-10">
          <form onSubmit={handleSignup}>
            <FormElement
              name="Username"
              value={username}
              setValue={setUsername}
            />
            <FormElement name="Name" value={name} setValue={setName} />
            <FormElement
              name="Password"
              value={password}
              setValue={setPassword}
            />
            <button type="submit">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
