import React from 'react';
import NavBarAdmin from '../../components/Admin/NavBarAdmin';
import AdminRegisterUser from '../../components/Admin/AdminRegisterUser';
import UserList from '../../components/Admin/UserList';

function Admin() {
  return (
    <main>
      <NavBarAdmin />
      <AdminRegisterUser />
      <UserList />
    </main>
  );
}

export default Admin;
