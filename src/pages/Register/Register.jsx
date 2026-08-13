// src/pages/Register/Register.jsx
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as S from '../Login/login.styled';

export const Register = () => {
  const navigate = useNavigate();
  const { login: signIn } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://wedev-api.sky.pro/api/user', {
        method: 'POST',
        body: JSON.stringify({ login, name, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Ошибка при регистрации');
      }

      const data = await response.json();
      signIn(data.user || data, data.token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Ошибка регистрации. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Регистрация</h2>
          </S.ModalTitle>
          <S.ModalForm onSubmit={handleRegister}>
            {error && (
              <p style={{ color: 'red', marginBottom: '15px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                {error}
              </p>
            )}

            <S.ModalInput
              type="text"
              name="first-name"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />

            <S.ModalInput
              type="text"
              name="login"
              placeholder="Эл. почта"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              disabled={isLoading}
              required
            />

            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />

            <S.ModalBtnEnter type="submit" disabled={isLoading}>
              {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
            </S.ModalBtnEnter>

            <S.ModalFormGroup>
              <p>Уже есть аккаунт?</p>
              <Link to="/login" style={{ textDecoration: 'none', color: '#565EEF' }}> Войдите здесь </Link>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
};
