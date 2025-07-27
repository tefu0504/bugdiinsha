import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ setUser }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    setUser({ username });
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSignup} className="bg-purple-600 text-white px-4 py-2 rounded">
        Create Account
      </button>
    </div>
  );
}

export default Signup;
