import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const LogoLight = styled.div`
  img {
    width: 85px;
  }
`;

export const LogoDark = styled.div`
  display: none;
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
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
  box-sizing: border-box;

  .name {
    font-size: 14px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 4px;
    text-align: left;
  }

  .mail {
    font-size: 12px;
    color: #94a6be;
    margin-bottom: 15px;
    text-align: left;
  }

  .theme {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    p {
      font-size: 14px;
      color: #000000;
      margin: 0;
    }
    
    .checkbox {
      position: relative;
      width: 24px;
      height: 14px;
      -webkit-appearance: none;
      background: #eaeaea;
      outline: none;
      border-radius: 15px;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      transition: .5s;
      cursor: pointer;
      
      &:checked {
        background: #565eef;
      }
      
      &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: .5s;
      }
      
      &:checked:before {
        left: 12px;
      }
    }
  }
`;

export const PopUserExitBtn = styled(Link)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 72px !important;
  height: 30px !important;
  background: transparent !important;
  border: 1px solid #565EEF !important;
  border-radius: 4px !important;
  color: #565EEF !important;
  text-decoration: none !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  cursor: pointer !important;
  margin: 0 auto !important;
  transition: all 0.2s ease !important;
  box-sizing: border-box !important;

  &:hover {
    background-color: #565EEF !important;
    color: #ffffff !important;
  }
`;
