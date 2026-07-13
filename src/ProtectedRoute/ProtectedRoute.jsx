import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ isAuth }) => {
  
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
