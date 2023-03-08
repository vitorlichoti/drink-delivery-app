import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import httpRequestAxios from '../utils/httpRequestAxios';
import httpCodeHandler from '../assets/httpCodeHandler';

import { PASSWORD_MINIMAL_LENGTH } from '../assets/constants';
import { writeStorage, readStorage, removeToken } from '../utils/localStorage';

const TWO_HUNDRED = 200;

function Login() {
  const [invalidUser, setInvalidUser] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function emailHandler(inputemail) {
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    return emailRegex.test(inputemail);
  }

  function passwordHandler(inputPassowrd) {
    return inputPassowrd.length >= PASSWORD_MINIMAL_LENGTH;
  }

  const verifyemail = emailHandler(email);
  const verifyPassword = passwordHandler(password);

  const validateDBUser = async (event, userData) => {
    event.preventDefault();

    const { status, data } = await httpRequestAxios('post', 'http://localhost:3001/login', userData);

    if (httpCodeHandler.notFound(status)) setInvalidUser(true);
    if (httpCodeHandler.success(status)) {
      if (data.role === 'administrator') {
        navigate('/admin/manage');
        writeStorage(data);
      } else if (data.role === 'seller') {
        setInvalidUser(false);
        writeStorage(data);
        navigate('/seller/orders');
      } else {
        setInvalidUser(false);
        writeStorage(data);
        navigate('/customer/products');
      }
    }
  };

  const redirectOnLoad = async (role) => {
    if (role === 'administrator') {
      navigate('/admin/manage');
    }

    if (role === 'seller') {
      navigate('/seller/orders');
    }

    if (role === 'customer') {
      navigate('/customer/products');
    }
  };

  useEffect(() => {
    const user = readStorage();

    async function verifyToken() {
      const res = await httpRequestAxios('post', 'http://localhost:3001/token', {}, { headers: { Authorization: user.token } });
      if (res.status !== TWO_HUNDRED) {
        removeToken();
      } else {
        redirectOnLoad(user.role);
      }
    }

    if (user.length !== 0) verifyToken();
  });

  return (
    <div>
      <form onSubmit={ (event) => validateDBUser(event, { email, password }) }>
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
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>
      <span
        data-testid="common_login__element-invalid-email"
      >
        { invalidUser && <p>Dados inválidos</p> }
      </span>
    </div>
  );
}

export default Login;
