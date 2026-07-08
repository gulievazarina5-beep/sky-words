import { useNavigate } from 'react-router-dom';
import * as S from './PopUser.styled';

export default function PopUser({ setIsAuth }) {
  const navigate = useNavigate();

  // Функция для подтверждения выхода
  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuth(false);   // 1. Сбрасываем статус авторизации в false
    navigate('/login'); // 2. Уводим пользователя на страницу входа
  };

  // Функция для отмены выхода (просто закрывает окно)
  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/'); // Возвращаем на главную страницу, модалка исчезнет
  };

  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              
              {/* Кнопка "Да" вызывает handleLogout */}
              <S.BtnYes id="exitYes" onClick={handleLogout} type="button">
                Да, выйти
              </S.BtnYes>
              
              {/* Кнопка "Нет" вызывает handleCancel */}
              <S.BtnNo id="exitNo" onClick={handleCancel} type="button">
                Нет, остаться
              </S.BtnNo>
              
            </S.PopExitFormGroup>
          </S.PopExitForm>
          
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
