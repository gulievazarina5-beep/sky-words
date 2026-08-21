import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as S from "./Header.styled"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleNewCardClick = (event) => {
    event.preventDefault();
    navigate('/new-card');
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
            <S.BtnMainNew onClick={handleNewCardClick} id="btnMainNew">
              Создать новую задачу
            </S.BtnMainNew>
            
            <S.HeaderUser href="#" onClick={toggleMenu}>
              {user?.name || user?.login || "Пользователь"}
            </S.HeaderUser>

            <S.PopUserSet $isOpen={isOpen}>
              <p className="name">{user?.name || user?.login || "Пользователь"}</p>
              <p className="mail">{user?.email || user?.login || ""}</p>
              
              <div className="theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              
              <S.PopUserExitBtn to="/exit">
                Выйти
              </S.PopUserExitBtn>
            </S.PopUserSet>

          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.HeaderContainer>
  );
}
