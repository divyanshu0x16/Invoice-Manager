import React, { useState, useEffect } from 'react';
import loginService from '../services/login'
import { useHistory } from 'react-router-dom';

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
