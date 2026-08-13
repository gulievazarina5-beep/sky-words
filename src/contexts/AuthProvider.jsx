import { useState } from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser && savedUser !== 'undefined' && savedUser !== 'null') {
        return JSON.parse(savedUser);
      }
    } catch {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    return null;
  });

  const isAuth = !!user;

  const login = (userData, token) => {
    if (!token || !userData) return;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout, onLogin: login }}>
      {children}
    </AuthContext.Provider>
  );
}
