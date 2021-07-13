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
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto min-h-screen">
      <div className="">
        <form onSubmit={handleSignup}>
          <div>
            <div className="text-all-bp font-semibold">Username</div>
            <input
              type="text"
              value={username}
              name="Username"
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <div  className="text-all-bp font-semibold">Name</div>
            <input
              type="text"
              value={name}
              name="Name"
              placeholder="Name"
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            <div  className="text-all-bp font-semibold">Password</div>
            <div>3 or more characters</div>
            <input
              type="password"
              value={password}
              name="Name"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
