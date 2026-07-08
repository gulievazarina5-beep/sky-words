import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Добавили useNavigate
import * as S from "./Header.styled"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Инициализируем хук навигации

  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  // Новая функция для программного перехода на страницу создания задачи
  const handleNewCardClick = (event) => {
    event.preventDefault();
    navigate('/new-card'); // Жестко перенаправляем на правильный адрес без пробелов
  };

  return (
    <S.HeaderContainer>
      <S.Container>
        <S.HeaderBlock>
          
          <S.LogoLight>
            <Link to="/">
              <img src="images/logo.png" alt="logo" />
            </Link>
          </S.LogoLight>

          <S.LogoDark>
            <Link to="/">
              <img src="images/logo_dark.png" alt="logo" />
            </Link>
          </S.LogoDark>

          <S.HeaderNav>
            {/* Навесили обычное событие onClick, которое вызовет нашу функцию */}
            <S.BtnMainNew onClick={handleNewCardClick} id="btnMainNew">
              Создать новую задачу
            </S.BtnMainNew>
            
            <S.HeaderUser href="#" onClick={toggleMenu}>
              Ivan Ivanov
            </S.HeaderUser>

            <S.PopUserSet $isOpen={isOpen}>
              <p className="name">Ivan Ivanov</p>
              <p className="mail">ivan.ivanov@gmail.com</p>
              
              <div className="theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              
              <button type="button" style={{ border: 'none', background: 'none', padding: 0, width: '100%' }}>
                <Link to="/exit" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                  Выйти
                </Link>
              </button>
            </S.PopUserSet>

          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.HeaderContainer>
  );
}
