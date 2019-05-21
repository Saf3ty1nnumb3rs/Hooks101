import React, { useState } from 'react';
import '../Login/Login.scss';

const initialFormState = {
    username: '',
    email: '',
    password: '',
}

const Register = () => {

  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser(form);
    setForm(initialFormState);
  }
  return (
    <div className="login-wrapper">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeHolder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          className="input"
          type="text"
          placeHolder="Email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          className="input"
          type="text"
          placeHolder="Password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button
          className="btn primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <br />
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
};

export default Register;