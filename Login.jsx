import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ username });
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-purple-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}

export default Login;
