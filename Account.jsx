import React from 'react';

function Account({ user }) {
  if (!user) return <p className="p-6 text-red-500">Please log in to view your account.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Account Info</h2>
      <p className="mt-2">Username: {user.username}</p>
      <p className="mt-1 text-gray-500">More features coming soon...</p>
    </div>
  );
}

export default Account;
