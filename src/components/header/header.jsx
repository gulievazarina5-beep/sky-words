import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            
            {/* Клик по имени */}
            <a href="#" className="header__user _hover02" onClick={toggleMenu}>
              Ivan Ivanov
            </a>

            {/* Жесткое управление стилями из React, которое CSS не сможет перебить */}
            <div
              className="header__pop-user-set pop-user-set"
              style={{ 
                display: isOpen ? "block" : "none",
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? "visible" : "hidden",
                pointerEvents: isOpen ? "auto" : "none"
              }}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
}
