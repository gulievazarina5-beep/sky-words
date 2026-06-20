import * as S from './popuser.styled';

export default function PopUser() {
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              
              {/* Чистые ссылки внутри наших стилизованных кнопок */}
              <S.BtnYes id="exitYes">
                <a href="#">Да, выйти</a>
              </S.BtnYes>
              
              <S.BtnNo id="exitNo">
                <a href="#">Нет, остаться</a>
              </S.BtnNo>
              
            </S.PopExitFormGroup>
          </S.PopExitForm>
          
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
