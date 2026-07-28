import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/auth';
import * as S from './register.styled';

export const Register = () => {
  const navigate = useNavigate();
  
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
      await registerUser({ 
        login, 
        name, 
        password 
      });
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Ошибка регистрации. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.ContainerSignup>
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
              id="first-name" 
              placeholder="Имя" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />

            <S.ModalInput 
              type="text" 
              name="login" 
              id="loginReg" 
              placeholder="Эл. почта" 
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              disabled={isLoading}
              required
            />

            <S.ModalInput 
              type="password" 
              name="password" 
              id="passwordReg" 
              placeholder="Пароль" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
            
            <S.ModalBtnSignUp type="submit" disabled={isLoading}>
              {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
            </S.ModalBtnSignUp>

            <S.ModalFormGroup>
              <p>Уже есть аккаунт?</p>
              <S.ModalLink to="/login"> Войдите здесь </S.ModalLink>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignup>
  );
};
