import React from 'react';

function Login() {
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
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
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
