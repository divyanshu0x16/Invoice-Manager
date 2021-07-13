import React, { useState } from 'react';
import signupService from '../services/signup';
import { useHistory } from 'react-router-dom';

export const FormElement = ({ name, value, setValue }) => {
  return (
    <div>
      <div className="text-all-bp font-semibold">{name}</div>
      <input
        type="text"
        value={value}
        name="Username"
        placeholder="Username"
        className="transition-colors duration-300 bg-white dark:bg-all-darkbg rounded-md"
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
            <FormElement
              name="Name"
              value={name}
              setValue={setName}
            />
            <FormElement
              name="Passowrd"
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
