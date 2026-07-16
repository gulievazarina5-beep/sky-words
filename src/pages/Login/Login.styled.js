import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSignin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #EAEEF6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 368px;
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 50px 44px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
`;

export const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ModalTitle = styled.div`
  margin-bottom: 20px;
  h2 {
    color: #000000;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin: 0;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #94A6BE;
  }
`;

export const ModalBtnEnter = styled.button`
  width: 100%;
  height: 40px;
  background-color: #565EEF;
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #33399B;
  }
`;

export const ModalFormGroup = styled.div`
  text-align: center;
  margin-top: 14px;
  p {
    color: #94A6BE;
    font-size: 14px;
    margin: 0 0 6px 0;
  }
`;

export const ModalLink = styled(Link)`
  color: #94A6BE;
  text-decoration: underline;
  font-size: 14px;
  
  &:hover {
    color: #565EEF;
  }
`;
