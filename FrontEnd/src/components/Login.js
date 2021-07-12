import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../reducers/userReducer';
import { Redirect, useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(user);

  if (Object.keys(user).length !== 0 && user.constructor === Object) {
    return <Redirect to="/" />;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      const credentials = {
        username,
        password,
      };
      dispatch(loginUser(credentials));
      setUsername('');
      setPassword('');
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
