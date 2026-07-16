import { useNavigate } from 'react-router-dom';
import * as S from './PopUser.styled';

export default function PopUser({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
    navigate('/login');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <S.PopExitForm id="formExit" onSubmit={handleLogout}>
            <S.PopExitFormGroup>
              <S.BtnYes id="exitYes" type="submit">
                Да, выйти
              </S.BtnYes>
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
