import styled from 'styled-components';

export const PopExit = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 8px;
  border: 0.7px solid #dcdcdc;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopExitTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    color: #000000;
  }
`;

export const PopExitForm = styled.form`
  width: 100%;
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const BaseButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
`;

export const BtnYes = styled(BaseButton)`
  background-color: #565eef;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }
`;

export const BtnNo = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid #565eef;
  color: #565eef;

  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;
