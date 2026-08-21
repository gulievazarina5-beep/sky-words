import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Main from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { NotFound } from './pages/NotFound/NotFound';
import PopUser from './components/PopUser/PopUser';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { AuthContext } from './contexts/AuthContext';

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  const hasToken = !!localStorage.getItem('token');
  const isAuthenticated = isAuth && hasToken;

  return (
    <Routes>
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} 
      />
      <Route 
        path="/register" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <Register />} 
      />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Main />}>
          <Route path="exit" element={<PopUser />} />
          <Route path="new-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
