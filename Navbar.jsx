import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Navbar({ user, setUser, cart }) {
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="text-xl font-bold text-purple-400">GameHaven</Link>
        <Link to="/products" className="ml-4 hover:underline">Products</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hi, {user.email}</span>
            <Link to="/account" className="mr-4 hover:underline">Account</Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4 hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}
        <span className="ml-4">🛒 {cart.length}</span>
      </div>
    </nav>
  );
}

export default Navbar;
