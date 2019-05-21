import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const userData = {
      username,
      password,
    }
    setUser(userData);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeHolder="Username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          className="input"
          type="text"
          placeHolder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button
          className="btn primary"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
      <br />
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
};

export default Login;