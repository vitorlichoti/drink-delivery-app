import React from 'react';
import NavBarAdmin from '../components/NavBarAdmin';
import AdminRegisterUser from '../components/AdminRegisterUser';
import UserList from '../components/UserList';

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
