import { useNavigate } from 'react-router-dom';
import * as S from './register.styled';

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login'); 
  };

  return (
    <S.ContainerSignup>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Регистрация</h2>
          </S.ModalTitle>
          <S.ModalForm onSubmit={handleRegister}>
            <S.ModalInput 
              type="text" 
              name="first-name" 
              id="first-name" 
              placeholder="Имя" 
            />
            <S.ModalInput 
              type="text" 
              name="login" 
              id="loginReg" 
              placeholder="Эл. почта" 
            />
            <S.ModalInput 
              type="password" 
              name="password" 
              id="passwordReg" 
              placeholder="Пароль" 
            />
            <S.ModalBtnSignUp type="submit">
              Зарегистрироваться
            </S.ModalBtnSignUp>
            <S.ModalFormGroup>
              <p>Уже есть аккаунт?</p>
              <S.ModalLink to="/login">
                Войдите здесь
              </S.ModalLink>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignup>
  );
};
