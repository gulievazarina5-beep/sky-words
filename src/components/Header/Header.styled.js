import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #dcdcdc;
`;

export const Container = styled.div`
  max-width: 1260px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Стили для логотипов (светлая тема по умолчанию)
export const LogoLight = styled.div`
  img {
    width: 85px;
  }
`;

export const LogoDark = styled.div`
  display: none; /* Скрыто в светлой теме */
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative; /* Чтобы попап позиционировался относительно навигации */
`;

export const BtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const HeaderUser = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #565eef;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Стилизованный попап пользователя, управляемый через пропс $isOpen
export const PopUserSet = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  right: 0;
  width: 213px;
  height: 205px;
  background: #ffffff;
  border: 0.7px solid #94a6be;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 25px;
  z-index: 10;

  .name {
    font-size: 14px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 4px;
  }

  .mail {
    font-size: 12px;
    color: #94a6be;
    margin-bottom: 15px;
  }

  .theme {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    p {
      font-size: 14px;
      color: #000000;
    }
  }

  button {
    width: 72px;
    height: 30px;
    background: transparent;
    border: 1px solid #565eef;
    border-radius: 4px;
    cursor: pointer;
    
    a {
      color: #565eef;
      text-decoration: none;
      font-size: 14px;
    }

    &:hover {
      background-color: #565eef;
      a {
        color: #ffffff;
      }
    }
  }
`;
