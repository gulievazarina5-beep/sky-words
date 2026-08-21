import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as S from './login.styled';

export const Login = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const signIn = context?.login || context?.onLogin;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!email.trim() || !password.trim()) {
      setError('Заполните все поля ввода');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: email.trim(),
          password: password.trim()
        })
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Неверный логин или пароль');
      }
      
      if (signIn) {
        const userToSave = data?.user ? data.user : data;
        const tokenToSave = data?.token || (data?.user?.token);

        signIn(userToSave, tokenToSave);
        navigate('/');
      } else {
        throw new Error('Критическая ошибка: метод авторизации отсутствует в контексте');
      }
      
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
              <p style={{ color: 'red', margin: '0 0 15px 0', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                {error}
              </p>
            )}

            <S.ModalInput 
              type="text" 
              name="login" 
              id="formlogin" 
              placeholder="Эл. почта" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <Link to="/register" style={{ textDecoration: 'none', color: '#565EEF' }}> Регистрируйтесь здесь </Link>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
};

export default Login;
