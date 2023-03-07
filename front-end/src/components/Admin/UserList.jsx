import React, { useState, useEffect } from 'react';
import httpRequestAxios from '../../utils/httpRequestAxios';
import { readStorage } from '../../utils/localStorage';

function UserList() {
  const [users, setUsers] = useState([]);
  const [dispatch, setDispatch] = useState(true);

  const TESTID_COMMON = 'admin_manage__';

  const { token } = readStorage();

  async function updateUser(id) {
    await httpRequestAxios('delete', 'http://localhost:3001/admin/delete/user', {
      id,
    });
  }

  function deleteUser(id) {
    updateUser(id);
  }

  useEffect(() => {
    async function getUsers() {
      const { data } = await httpRequestAxios('get', 'http://localhost:3001/admin/users', {}, { headers: { Authorization: token } });
      console.log(data);
      setUsers(data);
      setDispatch(!dispatch);
    }
    getUsers();
  }, [dispatch, token]);

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
        <tbody>
          {users?.map((user, index) => (
            <tr key={ index }>
              <td
                data-testid={ `${TESTID_COMMON}element-user-table-item-number-${index}` }
              >
                {user.id}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}element-user-table-name-${index}` }
              >
                {user.name}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}element-user-table-email-${index}` }
              >
                {user.email}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}element-user-table-role-${index}` }
              >
                {user.role}
              </td>
              <button
                type="button"
                data-testid={ `${TESTID_COMMON}element-user-table-remove-${index}` }
                onClick={ () => deleteUser(user.id) }
              >
                EXCLUIR
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
