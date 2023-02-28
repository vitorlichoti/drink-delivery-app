import React, { useState } from 'react';
import { MINIMAL_LENGTH } from '../assets/constants';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function emailHandler(inputemail) {
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    return emailRegex.test(inputemail);
  }

  function passwordHandler(inputPassowrd) {
    return inputPassowrd.length >= MINIMAL_LENGTH;
  }

  const verifyemail = emailHandler(email);
  const verifyPassword = passwordHandler(password);

  return (
    <div>
      <form>
        <label htmlFor="email">
          {' '}
          Login
          <input
            type="email"
            name="email"
            id="email"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          {' '}
          Senha
          <input
            type="password"
            name="password"
            id="password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !(verifyemail && verifyPassword) }
        >
          LOGIN
        </button>
      </form>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
      <span
        data-testid="common_login__element-invalid-email"
      >
        Email invalido OCULTARRRR!
      </span>
    </div>
  );
}

export default Login;
