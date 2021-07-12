import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <div>
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
            type="text"
            value={password}
            name="Name"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
