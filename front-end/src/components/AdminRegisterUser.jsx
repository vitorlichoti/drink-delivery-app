import React from 'react';

function AdminRegisterUser() {
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
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
      >
        LOGIN
      </button>
    </form>
  );
}

export default AdminRegisterUser;
