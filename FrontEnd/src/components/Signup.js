import React, { useState } from 'react';
import signupService from '../services/signup';
import { useHistory } from 'react-router-dom';

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
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto min-h-screen">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          Username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Name
          <input
            type="text"
            value={name}
            name="Name"
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            value={password}
            name="Name"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
