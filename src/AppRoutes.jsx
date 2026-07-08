import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// Импортируем наши страницы из папки pages
import Main from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { NotFound } from './pages/NotFound/NotFound';

// Импортируем модальные окна из папки components
import PopUser from './components/PopUser/PopUser';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';

// Компонент для защиты приватных страниц
const ProtectedRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AppRoutes = ({ isAuth, setIsAuth, cards }) => {
  return (
    <Routes>
      {/* Открытые страницы для всех */}
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<Register />} />

      {/* Закрытые страницы (доступны только если isAuth === true) */}
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path="/" element={<Main cards={cards} />}>
          {/* Вложенные маршруты для модальных окон поверх главной доски */}
          <Route path="exit" element={<PopUser setIsAuth={setIsAuth} />} />
          <Route path="new-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse />} />
        </Route>
      </Route>

      {/* Все остальные несуществующие адреса ведут на 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
