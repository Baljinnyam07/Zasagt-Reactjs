import React from 'react';
import AdminNav from './components/navbar';

function Admin() {
  return (
    <div className="text-white flex h-screen">
      <AdminNav/>
      <main className="flex-grow p-10 bg-[#e9ebf0]">
        <h1 className="text-3xl font-semibold mb-6">Welcome To Admin</h1>
        <p className="text-lg">
          This is your admin dashboard where you can manage various aspects of your application.
        </p>
      </main>
    </div>
  );
}

export default Admin;