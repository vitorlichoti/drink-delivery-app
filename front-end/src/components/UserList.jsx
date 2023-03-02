import React from 'react';

function UserList() {
  return (
    <div>
      <p>Lista de usuarios</p>
      <table>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </table>
    </div>
  );
}

export default UserList;
