import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-6">
          <li>
            <Link className="hover:underline" to="/admin">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/admin/posts/news">
              Manage News
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/admin/mechanical/mining">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/admin/humanity/hire">
              Humanity
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/admin/feedbacks/feedback">
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-10">
        <h1 className="text-3xl font-semibold mb-6">Welcome To Admin</h1>
        <p className="text-lg">
          This is your admin dashboard where you can manage various aspects of your application.
        </p>
        {/* Add more content for the admin dashboard here */}
      </main>
    </div>
  );
}

export default Admin;