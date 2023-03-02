import React, { useState } from 'react';
import { NAME_MINIMAL_LENGTH, PASSWORD_MINIMAL_LENGTH } from '../assets/constants';

function AdminRegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <form>
      Cadastrar novo usuario
      <p />
      <label htmlFor="name">
        {' '}
        Nome
        <input
          type="text"
          data-testid="admin_manage__input-name"
          name="name"
          id="name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        {' '}
        Email
        <input
          type="text"
          data-testid="admin_manage__input-email"
          name="email"
          id="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        {' '}
        Senha
        <input
          type="text"
          data-testid="admin_manage__input-password"
          name="password"
          id="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <label htmlFor="role">
        {' '}
        Tipo
        <select
          type="select"
          data-testid="admin_manage__select-role"
          name="role"
          id="role"
        >
          <option value="" selected disabled hidden> </option>
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        disabled={ !(verifyEmail && verifyName && verifyPassword) }
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default AdminRegisterUser;
