import { useNavigate } from 'react-router-dom';

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true); // 1. Меняем статус на "авторизован"
    navigate('/');   // 2. Мгновенно перенаправляем пользователя на главную страницу
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Страница Входа (Логин)</h2>
      <button onClick={handleLogin}>Войти в аккаунт</button>
    </div>
  );
};
