import { useNavigate } from 'react-router-dom';
import * as S from './login.styled';

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();       
    navigate('/');   
  };

  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Вход</h2>
          </S.ModalTitle>
          <S.ModalForm onSubmit={handleLogin}>
            <S.ModalInput 
              type="text" 
              name="login" 
              id="formlogin" 
              placeholder="Эл. почта" 
            />
            <S.ModalInput 
              type="password" 
              name="password" 
              id="formpassword" 
              placeholder="Пароль" 
            />
            <S.ModalBtnEnter type="submit">
              Войти
            </S.ModalBtnEnter>
            <S.ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
              <S.ModalLink to="/register">
                Регистрируйтесь здесь
              </S.ModalLink>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
};
