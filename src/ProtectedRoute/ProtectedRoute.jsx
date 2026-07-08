import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ isAuth }) => {
  // Если авторизован — показываем вложенные страницы (Outlet), если нет — редирект на /login
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
