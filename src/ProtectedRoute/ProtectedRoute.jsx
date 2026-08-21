import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const ProtectedRoute = () => {
  const { isAuth } = useContext(AuthContext);
  const hasToken = !!localStorage.getItem('token');

  return isAuth && hasToken ? <Outlet /> : <Navigate to="/login" replace />;
};
