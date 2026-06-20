import { useState } from "react";
import * as S from "./Header.styled"; // Импортируем стили

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Container>
        <S.HeaderBlock>
          
          <S.LogoLight>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.LogoLight>

          <S.LogoDark>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.LogoDark>

          <S.HeaderNav>
            <S.BtnMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </S.BtnMainNew>
            
            <S.HeaderUser href="#" onClick={toggleMenu}>
              Ivan Ivanov
            </S.HeaderUser>

            {/* Передаем состояние видимости в проп $isOpen */}
            <S.PopUserSet $isOpen={isOpen}>
              <p className="name">Ivan Ivanov</p>
              <p className="mail">ivan.ivanov@gmail.com</p>
              
              <div className="theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              
              <button type="button">
                <a href="#popExit">Выйти</a>
              </button>
            </S.PopUserSet>

          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.HeaderContainer>
  );
}
