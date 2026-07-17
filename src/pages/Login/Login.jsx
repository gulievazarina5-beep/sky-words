import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth';
import * as S from './login.styled';

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await loginUser({ 
        login, 
        password 
      });
      
      onLogin();
      navigate('/');
    } catch (err) {
      setError(err.message || 'Неверный логин или пароль. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Вход</h2>
          </S.ModalTitle>
          <S.ModalForm onSubmit={handleLogin}>
            
            {error && (
              <p style={{ color: 'red', marginBottom: '15px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                {error}
              </p>
            )}

            <S.ModalInput 
              type="text" 
              name="login" 
              id="formlogin" 
              placeholder="Эл. почта" 
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              disabled={isLoading}
              required
            />

            <S.ModalInput 
              type="password" 
              name="password" 
              id="formpassword" 
              placeholder="Пароль" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
            
            <S.ModalBtnEnter type="submit" disabled={isLoading}>
              {isLoading ? 'Загрузка...' : 'Войти'}
            </S.ModalBtnEnter>

            <S.ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
              <S.ModalLink to="/register"> Регистрируйтесь здесь </S.ModalLink>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
};
