import { useNavigate } from 'react-router-dom';
import * as S from './Login.styled'; // Импортируем созданные стили

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true); // 1. Меняем статус на "авторизован"
    navigate('/');   // 2. Мгновенно перенаправляем пользователя на главную страницу
  };

  return (
    <S.LoginContainer>
      <S.LoginTitle>Страница Входа (Логин)</S.LoginTitle>
      <S.LoginButton onClick={handleLogin}>Войти в аккаунт</S.LoginButton>
    </S.LoginContainer>
  );
};
