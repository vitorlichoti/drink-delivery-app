import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAME_MINIMAL_LENGTH, PASSWORD_MINIMAL_LENGTH } from '../assets/constants';

import httpRequestAxios from '../utils/httpRequestAxios';
import httpCodeHandler from '../assets/httpCodeHandler';

import { writeStorage } from '../utils/localStorage';

import './Style/Register.css';

function Register() {
  const [invalidUser, setInvalidUser] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function nameHandler(inputName) {
    return inputName.length >= NAME_MINIMAL_LENGTH;
  }

  function emailHandler(inputemail) {
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    return emailRegex.test(inputemail);
  }

  function passwordHandler(inputPassowrd) {
    return inputPassowrd.length >= PASSWORD_MINIMAL_LENGTH;
  }

  const verifyName = nameHandler(name);
  const verifyEmail = emailHandler(email);
  const verifyPassword = passwordHandler(password);

  const registerDBUser = async (event, userData) => {
    event.preventDefault();

    const { status, data } = await httpRequestAxios('post', 'http://localhost:3001/register', userData);

    if (httpCodeHandler.conflict(status)) setInvalidUser(true);
    if (httpCodeHandler.created(status)) {
      setInvalidUser(false);
      writeStorage(data);
      navigate('/customer/products');
    }
  };

  return (
    <div
      className="registerContainer"
    >
      <p
        className="registerTitle"
      >
        Registro
      </p>
      <form
        onSubmit={ (event) => registerDBUser(event, { name, email, password }) }
        className="registerForm"
      >
        <label htmlFor="name">
          {' '}
          Nome
          <input
            type="text"
            name="name"
            id="name"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label
          htmlFor="email"
          className="registerEmailLabel"
        >
          {' '}
          Email
          <input
            type="email"
            name="email"
            id="email"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label
          htmlFor="password"
          className="registerPasswordLabel"
        >
          {' '}
          Senha
          <input
            type="password"
            name="password"
            id="password"
            data-testid="common_register__input-password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ !(verifyEmail && verifyName && verifyPassword) }
        >
          Registrar
        </button>
      </form>
      <span
        data-testid="common_register__element-invalid_register"
      >
        { invalidUser && <p>Dados inválidos</p> }
      </span>
    </div>
  );
}

export default Register;
