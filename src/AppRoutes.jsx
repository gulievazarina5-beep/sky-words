import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { NotFound } from './pages/NotFound/NotFound';
import PopUser from './components/PopUser/PopUser';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';



export const AppRoutes = ({ isAuth, onLogin, onLogout, cards }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={onLogin} isAuth={isAuth} />} />
      <Route path="/register" element={<Register isAuth={isAuth} />} />

      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path="/" element={<Main cards={cards} />}>
          <Route path="exit" element={<PopUser onLogout={onLogout} />} />
          <Route path="new-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
